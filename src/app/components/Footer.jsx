import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <footer className='relative  text-white'>
      <div className="flex justify-between items-center border-b-2 border-fuchsia-500 py-10">
        <ul className="flex items-center gap-10">
          <li className="text-3xl font-bold">
            <Link href="/">BlarQStore</Link>
          </li>
        </ul>

        <ul className="flex gap-8">
          <li>
            <Link href="/catalog">Catalog</Link>
          </li>
          <li>
            <Link href="/delivery">Delivery</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="flex items-center gap-4 text-lg">
          <li>
            <Link href="https://github.com/BlarQ">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/ogunlala-adedamola/">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/">
              <IoLogoInstagram />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/channel/UC_YcEB6tzj9pGC-Qz4bdqXA">
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/BlarQ_04">
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex justify-between items-center py-10'>
        <p>Created by &copy;<Link href='https://twitter.com/BlarQ_04' target='_blank'>BlarQ {new Date().getFullYear()}</Link></p>

        <p>BlarQ Inc.</p>
      </div>
    </footer>
  );
}

export default Footer