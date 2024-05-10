import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

export const BottomNavbar = () => {
  const cartVal = 0
  return (
    <nav className='flex items-center justify-between  px-16 py-3'>
      <ul className='flex items-center gap-10'>
        <li className='text-3xl font-bold'>
          <Link href='/'>BlarQStore</Link>
        </li>
        <li><Link href='/catalog'>Catalog</Link></li>
        <li><Link href='/delivery'>Delivery</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>

      <ul className='flex gap-4 items-center text-lg cursor-pointer'>
        <li>Cart</li>
        <li className='text-3xl'><IoCartOutline /></li>
        <li className='bg-fuchsia-700 text-white text-sm rounded-full px-2 py-[0.1rem] items-center font-mono'>{cartVal}</li>
      </ul>
    </nav>
  )
}
