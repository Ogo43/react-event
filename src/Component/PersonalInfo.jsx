import React from 'react'

const PersonalInfo = () => {
  return (
    <div className='info_wrapper'>
        <div className='pic'>
            <img src="https://randomuser.me/api/portraits/med/women/77.jpg"/>
        </div>
        <div>
            <h2 className='info-id'>000012</h2>
            <p>
                <span className='title'>ms</span>
                <span className='firstname'>Ogochukwu</span>
                <span className='lastname'>Emeh</span>
            </p>
        </div>
    </div>
  )
}

export default PersonalInfo