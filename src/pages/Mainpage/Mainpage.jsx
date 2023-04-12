import React from 'react'
import Header from '../../Component/Header'
import MainContainer from '../../Component/MainContainer'
import '../../App.css'
function Mainpage() {
  return (
    <div>
      <Header/>
      <div className='m-body'>
      <MainContainer />
      </div>

    </div>
  )
}

export default Mainpage