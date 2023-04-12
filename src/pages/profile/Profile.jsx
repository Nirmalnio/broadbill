import React,{useState,useEffect} from 'react'
import Header from '../../Component/Header'
import Avatar from '@mui/material/Avatar';


function Profile() {
  const username = window.localStorage.getItem('username') 

  return (
    <div>
        <Header/>
        <div className='d-flex justify-content-center align-items-center' style={{height:"75vh"}}>
               <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
               <Avatar sx={{ height: '100px', width: '100px' }}
               alt={username} src="/static/images/avatar/2.jpg"  />

               <h1>{username}</h1>

               </div>
        </div>
    </div>
  )
}

export default Profile