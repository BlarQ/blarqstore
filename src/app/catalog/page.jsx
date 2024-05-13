import React from 'react'
import { TiArrowRightThick } from 'react-icons/ti'

export default function Catalog() {
  return (
    <div className='pt-36'>
      <div className='text-sm text-gray-300 px-8 py-3 border-2 border-gray-200 rounded-full mx-16'>
          <div className='flex justify-start items-center'>
            <p>Home</p>
            <TiArrowRightThick className='mx-2'/>
            <p>Catalog</p>
          </div>
      </div>

      <div className='flex justify-center items-center mt-10 bg-white shadow-sm w-[90%] mx-16 rounded-3xl p-20'>
        
        <h2 className='text-gray-400 text-2xl'>Catalog Page Under Process...</h2>
      </div>
    </div>
  )
}
