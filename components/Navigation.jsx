import React from 'react'
import { IconMailHeart, IconFlower, IconTie } from '@tabler/icons-react';

function Navigation() {
  return (
    <div className='absolute bottom-0 w-full z-100 px-5 pb-3'>
      <div className='flex items-center gap-2 w-full bg-white/20 backdrop-blur-md rounded-full p-2'>
        <a className='p-2 rounded-full border-2 border-white text-white bg-red-900 w-fit flex gap-1 items-center'>
          <IconMailHeart stroke={2}  />
          <span>Greetings</span>
        </a>
        <a className='p-2 rounded-full border-2 border-white w-fit'>
          <IconFlower stroke={2} color='#fff'  />
        </a>
        <a className='p-2 rounded-full border-2 border-white w-fit'>
          <IconTie stroke={2} color='#fff'  />
        </a>
      </div>
    </div>
  )
}

export default Navigation