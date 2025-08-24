import React from 'react'
import Decoration from '../components/Decoration'
import MockNav from '../components/MockNav'
import { IconPlant2 } from '@tabler/icons-react';

function Event() {
  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-[100dvh] bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className='absolute top-0 w-full h-full z-100'>
        <div className='flex flex-col justify-center p-6'>
            <div className='bg-white/40 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-100px)]'>
                <p className='text-xs font-semibold text-[#AA873C] flex items-center gap-1'>
                    <IconPlant2 width={15} />Akad pernikahan<IconPlant2 width={15}/>
                </p>
                <p className='text-sm'>Pukul 08.00 WIB - Selesai</p>
                <div className='javassoul my-8 text-center'>
                    <h1 className='text-5xl'>Minggu</h1>
                    <h1 className='text-6xl text-[#AA873C] mt-2'>23.06.25</h1>
                </div>
                <p className='text-xs font-semibold text-[#AA873C] flex items-center gap-1'>
                    <IconPlant2 width={15} />Kediaman Wanita<IconPlant2 width={15}/>
                </p>
                <p className='text-sm font-light'>Perum KCVRI</p>
                <p className='text-sm font-light'>Blok A. No. 09 RT 01/RW 07</p>
            </div>
        </div>
      </div>
        <MockNav prevPage="/bride" nextPage="/maps" />
    </div>
  )
}

export default Event