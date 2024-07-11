import React,{ useState } from 'react'
import './chatList.css'
import search from '../../assets/search.png'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'
import avatar from '../../assets/avatar.png'
import AddUser from './addUser/AddUser'


const ChatList = () => {

    const[addMode, setAddMode] = useState('false');

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
      <div className='item'>
        <img src = {avatar} alt= '' />
        <div className="texts">
            <span>Alay Kabir</span>
            <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src = {avatar} alt= '' />
        <div className="texts">
            <span>Alay Kabir</span>
            <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src = {avatar} alt= '' />
        <div className="texts">
            <span>Alay Kabir</span>
            <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src = {avatar} alt= '' />
        <div className="texts">
            <span>Alay Kabir</span>
            <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src = {avatar} alt= '' />
        <div className="texts">
            <span>Alay Kabir</span>
            <p>Hello</p>
        </div>
      </div>
      { addMode &&  <AddUser/> }
    </div>
  )
}

export default ChatList
