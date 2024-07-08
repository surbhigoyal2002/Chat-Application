import React, {useRef} from 'react'
import './chat.css'
import avatar from '../../assets/avatar.png'
import phone from '../../assets/phone.png'
import info from '../../assets/info.png'
import video from '../../assets/video.png'
import emoji from '../../assets/emoji.png'
import img from '../../assets/img.png'
import camera from '../../assets/camera.png'
import mic from '../../assets/mic.png'
import pic from '../../assets/pic.png'
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'
import { useEffect } from 'react'



const Chat = () => {

    const[open, setOpen] = useState(false);
    const[text, setText] = useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const handleEmoji = e => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    }
    console.log(text);
    
  return (
    <div className='chat'>
      <div className="top">
          <div className="user">
              <img src={avatar} alt= '' />
              <div className="texts">
              <span>Alay Kabir</span>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
          </div>
          <div className="icons">
          <img src={phone} alt= '' />
          <img src={video} alt= '' />
          <img src={info} alt= '' />
          </div>
      </div>
      <div className="center">
          <div className="message">
          <img src={avatar} alt= '' />
          <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Placeat ipsa nisi eveniet? Delectus facere quasi quas
                 ratione nemo quaerat quis cum repellendus, similique rerum 
                 illum ducimus placeat consectetur natus quam.
              </p>
              <span>1 min ago</span>
          </div>
          </div>
          <div className="message own">
          <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Placeat ipsa nisi eveniet? Delectus facere quasi quas
                 ratione nemo quaerat quis cum repellendus, similique rerum 
                 illum ducimus placeat consectetur natus quam.
              </p>
              <span>1 min ago</span>
          </div>
          </div>
          <div className="message">
          <img src={avatar} alt= '' />
          <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Placeat ipsa nisi eveniet? Delectus facere quasi quas
                 ratione nemo quaerat quis cum repellendus, similique rerum 
                 illum ducimus placeat consectetur natus quam.
              </p>
              <span>1 min ago</span>
          </div>
          </div>
          <div className="message own">
          <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Placeat ipsa nisi eveniet? Delectus facere quasi quas
                 ratione nemo quaerat quis cum repellendus, similique rerum 
                 illum ducimus placeat consectetur natus quam.
              </p>
              <span>1 min ago</span>
          </div>
          </div>
          <div className="message">
          <img src={avatar} alt= '' />
          <div className="texts">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Placeat ipsa nisi eveniet? Delectus facere quasi quas
                 ratione nemo quaerat quis cum repellendus, similique rerum 
                 illum ducimus placeat consectetur natus quam.
              </p>
              <span>1 min ago</span>
          </div>
          </div>
          <div className="message own">
          <div className="texts">
              <img src= {pic} alt= '' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Placeat ipsa nisi eveniet? Delectus facere quasi quas
                 ratione nemo quaerat quis cum repellendus, similique rerum 
                 illum ducimus placeat consectetur natus quam.
              </p>
              <span>1 min ago</span>
          </div>
          </div>
          <div ref = {endRef}></div>
      </div>
      <div className="bottom">
          <div className="icons">
          <img src= {img} alt= '' />
          <img src= {camera} alt= '' />
          <img src= {mic} alt= '' />
          </div>
          <input 
            type= 'text' 
            placeholder= 'Type a message...' 
            value= {text}
            onChange={(e) => setText(e.target.value)}/>
          <div className="emoji">
              <img src= {emoji} alt= '' onClick={() => setOpen(prev => !prev)} />
              <div className="picker">
                <EmojiPicker open = {open} onEmojiClick= {handleEmoji} />
              </div>
          </div>
          <button className= 'sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat
