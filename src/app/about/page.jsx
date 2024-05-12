import React from 'react'
import { TiArrowRightThick } from "react-icons/ti"

export default function About() {
  return (
    <div className='pt-36 '>
        <div className='text-sm text-gray-300 px-8 py-3 border-2 border-gray-200 rounded-full mx-16'>
          <div className='flex justify-start items-center'>
            <p>Home</p>
            <TiArrowRightThick className='mx-2'/>
            <p>About</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-20'>
            <p className='text-fuchsia-700 font-bold text-lg'>Welcome to our World</p>
            <h2 className='my-5 text-5xl'>Introducing BlarQStore</h2>
            <p className='mx-80 text-center text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h3 className='my-10 border-b-2 border-gray-300'>More About Us</h3>
            <img src='abtme.jpg' className='h-[32rem] w-[90%] rounded-2xl shadow-lg'/>
        </div>

        <div className='my-20 flex justify-center items-center mx-16'>
            <div className=''>
                <h3 className='my-10 text-5xl'>Our Team</h3>
                <div className='border-t-2 w-16 border-fuchsia-700 -mt-5 mb-5'></div>
                <p className='mr-28'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ipsa voluptatibus quae laudantium, facere numquam. Eos eum exercitationem perferendis cupiditate aut. Fugiat, ad pariatur. Aperiam libero nostrum amet blanditiis autem!</p>

                <button className='rounded-full cursor-pointer bg-fuchsia-600 text-white py-3 px-4 my-4 hover:shadow-md hover:scale-110'>Chat a Member</button>
            </div>
            
            <img src='team.jpg' className='h-[26rem] w-[95%] rounded-2xl shadow-lg my-7 ml-5'/>
        </div>

        <div>

        </div>
    </div>
  )
}
