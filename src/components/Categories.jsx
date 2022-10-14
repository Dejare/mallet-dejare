import React from 'react';
import imag from '../assets/images/categories1.svg'

function Categories({image, text}) {
  return (
      <div className='relative w-1/5 border border-[#afafaf] rounded-[8px] p-1 mx-4'>
          <div >
              <img src={image } alt="" />
              
          </div>
          <h3 className='text-center my-3'>{text}</h3>
    </div>
  )
}

export default Categories