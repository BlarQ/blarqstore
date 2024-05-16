import Image from 'next/image'
import React from 'react'
import { data } from "./data"
import Link from 'next/link'
import { TiArrowRightThick } from "react-icons/ti"

const pastData = data.filter(datum => datum.type == 'Cake').slice(0,4)

export const PastsMain = () => {
  const pastLog = pastData.map(past => (
    <section key={past.id} >
        <Link className='flex flex-col gap-3 items-center shadow-xl rounded-2xl py-10 text-2xl' href='/catalog'>
          <Image src={`https://www.robohash.org/${past.name.split(' ').join('-')}.jpg`} alt={past.name} width='300' height='400' className="h-40 w-40" />
          <h3>{past.name}</h3>
          <p><span>&#8358;</span><span>{past.amount}</span></p>
        </Link>
        
    </section>
  ))
  return (
    <section className='px-16'>
        <div className='flex justify-between items-center'>
        <h2 className='text-2xl py-8 capitalize font-semibold'>Pastries</h2>


        <Link href={`/catalog/${'Cake'}`}>
        
          <div className='flex items-center text-center space-x-2'>
            <p>See All Cakes</p>
            <TiArrowRightThick />
          </div>
        </Link>

      </div>
        
        <hr style={{height:'3px', background: 'linear-gradient(90deg, #159a9c 10%, #ccc 10%)', marginBlock: '10px'}}/>
    
        <div className="grid gap-4 grid-cols-4">
          {pastLog}
        </div>
    </section>
  )
}




