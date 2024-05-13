import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'
import { TiArrowRightThick } from 'react-icons/ti'

export default function Contacts() {
  return (
    <div className='py-36'>
      <div className='text-sm text-gray-300 px-8 py-3 border-2 border-gray-200 rounded-full mx-16'>
        <div className='flex justify-start items-center'>
          <p>Home</p>
          <TiArrowRightThick className='mx-2' />
          <p>Contact</p>
        </div>
      </div>

      <div className='flex items-start mt-10 bg-white shadow-sm w-[90%] mx-16 rounded-3xl p-20'>
        <div className='mr-32'>
          <h2 className='text-3xl font-bold'>Leave a Message</h2>

          <div className='my-10 flex flex-col'>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" placeholder='Enter your name' className='bg-gray-100 rounded-full pl-6 py-3 w-[34rem] focus:outline-fuchsia-700 mt-2' />
          </div>

          <div className='my-10 flex flex-col'>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" placeholder='Your contact email' className='bg-gray-100 rounded-full pl-6 py-3 w-[34rem] focus:outline-fuchsia-700 mt-2' />
          </div>

          <button className='rounded-full cursor-pointer bg-fuchsia-600 text-white py-3 px-4 my-4 hover:shadow-md hover:scale-110 w-36' type="submit">Send Message</button>
        </div>

        <div>
          <h2 className='text-2xl'>Contact Info</h2>

          <p className='mt-10 mb-2'>5, Adewale Street, Coker-Surulere, Lagos Nigeria.</p>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link href='tel:+2348174726892'>+2348174726892</Link>
            </li>
            <li className='border-b-2 border-gray-300 w-1/2'>
              <Link href="mailto:collinsogunlala@gmail.com">collinsogunlala@gmail.com</Link>
            </li>
          </ul>

          <h3 className='mt-10'>Follow Us</h3>

          <ul className='flex items-center text-lg mt-4'>
            <li className='hover:scale-110 bg-black text-white p-2 rounded-full'><Link href='https://github.com/BlarQ'>
              <FaGithub />
            </Link>
            </li>
            <li className='hover:scale-110 bg-blue-800 text-white p-2 rounded-full mx-2'>
              <Link href='https://www.linkedin.com/in/ogunlala-adedamola/'>
                <FaLinkedin />
              </Link>
            </li>
            <li className='hover:scale-110 bg-red-500 text-white p-2 rounded-full'>
              <Link href='https://www.instagram.com/'>
                <IoLogoInstagram />
              </Link>
            </li>
            <li className='hover:scale-110 bg-red-600 text-white p-2 rounded-full mx-2'>
              <Link href='https://www.youtube.com/channel/UC_YcEB6tzj9pGC-Qz4bdqXA'>
                <FaYoutube />
              </Link>
            </li>
            <li className='hover:scale-110 bg-blue-400 text-white p-2 rounded-full'>
              <Link href='https://twitter.com/BlarQ_04'>
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}
