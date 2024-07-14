import React,{ useState, useEffect } from 'react'
import "./chatList.css";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../../lib/firebase';
import { useUserStore } from '../../lib/userStore';
import search from '../../assets/search.png'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'
import avatar from '../../assets/avatar.png'
import AddUser from './addUser/AddUser'
import { useChatStore } from '../../lib/chatStore';


const ChatList = () => {

  const[chats, setChats] = useState([]);
  const[addMode, setAddMode] = useState(false);

    const {currentUser} = useUserStore();
    const {changeChat, chatId} = useChatStore();
    console.log(chatId);

    useEffect(() => {
      const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async(res) => {
      const items = res.data().chats;

      const promises = items.map(async(item) => {
        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data();

        return {...item, user};

      })
        const chatData = Promise.all(promises);

        setChats((await chatData).sort((a,b) => b.updatedAt - a.updatedAt));
    });
      return ()=>{
        unSub();
      }
    }, [currentUser.id]);

    // console.log(chats);

    const handleSelect = async(chat)=>{
        const userChats = chats.map(item => {
          const {user, ...rest} = item;
          return rest;
        });

        const chatIndex = userChats.findIndex(item=>item.chatId === chat.chatId)

        userChats[chatIndex].isSeen = true;

        const userChatsRef = doc(db, "userchats", currentUser.id);

        try{
          await updateDoc(userChatsRef,{
            chats: userChats,
          })
          changeChat(chat.chatId, chat.user)
        }
        catch(err){
          console.log(err);
        }

    }

  return (
    <div className='chatList'>
      <div className="search">
      <div className="searchBar">
          <img src= {search} alt= '' />
          <input type= 'text' placeholder='search' />
      </div>
      <img src= {addMode ? minus : plus} alt= '' id='add' 
      onClick={() => setAddMode(prev => !prev)}/>
      </div>

      {chats.map((chat) => (
        <div className='item' 
        key= {chat.chatId} 
        onClick = {()=>handleSelect(chat)}
        style= {{
          backgroundColor: chat?.isSeen ? "transparent" : "#218dbf",
        }}>
        <img src = {chat.user.image || avatar} alt= '' />
        <div className="texts">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
        </div>
      </div>
      ))}
      
      { addMode &&  <AddUser/> }
    </div>
  )
}

export default ChatList