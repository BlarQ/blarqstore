import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export const TopNavbar = () => {
  return (
    <nav className='flex justify-between items-center bg-fuchsia-700 text-white px-16 py-1'>
      <ul className='flex gap-2'>
        <li>
          <Link href='tel:+2348174726892'>Call Us: +2348174726892</Link>
        </li>
        <li>
          <Link href="mailto:collinsogunlala@gmail.com">Email Us: collinsogunlala@gmail.com</Link>
        </li>
      </ul>

      <ul className='flex items-center text-lg'>
        <li className='hover:bg-fuchsia-800 p-2 rounded-full'><Link href='https://github.com/BlarQ'>
            <FaGithub />
          </Link>
        </li>
        <li className='hover:bg-fuchsia-800 p-2 rounded-full'>
          <Link href='https://www.linkedin.com/in/ogunlala-adedamola/'>
            <FaLinkedin />
          </Link>
        </li>
        <li className='hover:bg-fuchsia-800 p-2 rounded-full'>
          <Link href='https://www.instagram.com/'>
            <IoLogoInstagram />
          </Link>
        </li>
        <li className='hover:bg-fuchsia-800 p-2 rounded-full'>
          <Link href='https://www.youtube.com/channel/UC_YcEB6tzj9pGC-Qz4bdqXA'>
            <FaYoutube />
          </Link>
        </li> 
        <li className='hover:bg-fuchsia-800 p-2 rounded-full'>
          <Link href='https://twitter.com/BlarQ_04'>
            <FaTwitter />
          </Link>
        </li>       
      </ul>
    </nav>
  )
}
