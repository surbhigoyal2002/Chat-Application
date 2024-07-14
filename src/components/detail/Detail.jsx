import React from 'react'
import './detail.css'
import avatar from '../../assets/avatar.png'
import arrowUp from '../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'
import pic from '../../assets/pic.png'
import download from '../../assets/download.png'
import { auth, db } from '../../lib/firebase'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'
import { arrayUnion } from 'firebase/firestore'
import { doc, updateDoc } from 'firebase/firestore'

const Detail = () => {

    const {chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock} = useChatStore();
    const {currentUser} = useUserStore();

    const handleBlock = async() => {
        if(!user) return;

        const userDocRef = doc(db, "users", currentUser.id)

        try{
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayremove(user.id) : arrayUnion(user.id)
            });
            changeBlock()
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div className='detail'>
      <div className="user">
          <img src={user?.image || avatar} alt="" />
          <h2>{user?.username}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info">
          <div className="option">
              <div className="title">
                  <span>Chat Settings</span>
                  <img src= {arrowUp} alt="" className='icon'/>
              </div>
          </div>
          <div className="option">
              <div className="title">
                  <span>Privacy & help</span>
                  <img src= {arrowUp} alt="" className='icon'/>
              </div>
          </div>
          <div className="option">
              <div className="title">
                  <span>Shared Photos </span>
                  <img src= {arrowDown} alt="" className='icon'/>
              </div>
              <div className="photos">
                  <div className="photoItem">
                      <div className="photoDetail">
                      <img src={pic} alt="" />
                      <span>photo_2024.png</span>
                      </div>
                  <img src={download} alt="" className='icon'/>
                  </div>
                  <div className="photoItem">
                      <div className="photoDetail">
                      <img src={pic} alt="" />
                      <span>photo_2024.png</span>
                      </div>
                  <img src={download} alt="" className='icon'/>
                  </div>
                  <div className="photoItem">
                      <div className="photoDetail">
                      <img src={pic} alt="" />
                      <span>photo_2024.png</span>
                      </div>
                  <img src={download} alt="" className='icon'/>
                  </div>
              </div>
          </div>
          <div className="option">
              <div className="title">
                  <span>Shared Files</span>
                  <img src= {arrowUp} alt="" className='icon'/>
              </div>
          </div>
          <button onClick = {handleBlock}>{isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}</button>
          <button id='logout' onClick= {() => auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail