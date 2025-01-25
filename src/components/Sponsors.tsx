import Image from 'next/image'
import React from 'react'

const Sponsors = () => {
  return (
    <div className='w-full py-10'>
      <h1 className='sm:text-5xl text-4xl font-bold text-center mb-10'>Our sponsors</h1>
      <ul className="flex flex-wrap w-full justify-evenly gap-5">
        {["Apple","Google","Slack","Microsoft"].map((val, ind) => (
            <li key={ind} className='relative h-12 w-32 my-5'>
                <Image
                src={`/${val}.png`}
                alt=''
                fill={true}
                className="object-contain"
                />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Sponsors