import React from 'react'

const PersonalInfo = ({src, id, title, firstname, lastname}) => {
  return (
    <div className='info_wrapper'>
        <div className='pic'>
            <img src={src}/>
        </div>
        <div>
            <h2 className='info-id'>{id}</h2>
            <p>
                <span className='title'>{`${title} `}</span>
                <span className='firstname'>{`${firstname} `}</span>
                <span className='lastname'>{lastname}</span>
            </p>
        </div>
    </div>
  )
}

export default PersonalInfo