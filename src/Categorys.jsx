import React from 'react'

const Categorys = ({categorys,filterItems}) => {
  return (
    <div className='btn-container'>
        {categorys.map((category) => {
            return (
                <button className='btn' type='button' key={{category}} onClick={() => filterItems(category)}>
                    {category}
                </button>
            )
        })}
    </div>
  )
}

export default Categorys