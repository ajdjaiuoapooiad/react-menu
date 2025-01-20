import React from 'react'

const Categorys = ({categorys}) => {
  return (
    <div className='btn-container'>
        {categorys.map((category) => {
            return (
                <button className='btn' type='button' key={{category}}>{category}</button>
            )
        })}
    </div>
  )
}

export default Categorys