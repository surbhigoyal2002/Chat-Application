import React from 'react'
import './userInfo.css'
import more from '../../assets/more.png'
import video from '../../assets/video.png'
import edit from '../../assets/edit.png'
import avatar from '../../assets/avatar.png'

const UserInfo = () => {
  return (
    <div className='userInfo'>
      <div className='user'>
      <img src = {avatar} alt= '' />
      <h4>Alay Kabir</h4>
      </div>
      <div className='icons'>
          <img src = {more} alt= '' />
          <img src = {video} alt= '' />
          <img src = {edit} alt= '' />
      </div>
    </div>
  )
}

export default UserInfo
