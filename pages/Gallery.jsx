import React from 'react'
import Decoration from '../components/Decoration'
import MockNav from '../components/MockNav'

function Gallery() {
  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-[100dvh] bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/40 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <h1 className='javassoul text-2xl text-[#AA873C]'>Our gallery</h1>
            <div className='grid grid-cols-3 gap-2'>
                <div className='col-span-2 h-40 bg-black'><img src='/images/prewed.jpg' alt='prewedd' className='h-full w-full object-cover' /></div>
                <div className='h-40 bg-black'><img src='/images/prewed.jpg' alt='prewedd' className='h-full w-full object-cover' /></div>
                <div className='h-40 bg-black'><img src='/images/prewed.jpg' alt='prewedd' className='h-full w-full object-cover' /></div>
                <div className='col-span-2 h-40 bg-black'><img src='/images/prewed.jpg' alt='prewedd' className='h-full w-full object-cover' /></div>
                <div className='col-span-2 h-40 bg-black'><img src='/images/prewed.jpg' alt='prewedd' className='h-full w-full object-cover' /></div>
                <div className='h-40 bg-black'><img src='/images/prewed.jpg' alt='prewedd' className='h-full w-full object-cover' /></div>
            </div>
          </div>
        </div>
      </div>
      <MockNav prevPage="/maps" nextPage="/quotes" />
    </div>
  )
}

export default Gallery