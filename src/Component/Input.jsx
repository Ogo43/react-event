import React from 'react'

const Input = ({onChangeHandler}) => {
  return (
        <div className='input-wrapper'>
            <input
            name='user_input'
            type='text'
            placeholder='search by name'
            className='input_block'
            onChange={(e) => onChangeHandler(e)}
        /> 
        </div>
  )
}

export default Input