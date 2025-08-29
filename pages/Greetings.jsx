import Decoration from '../components/Decoration'
import coupleImage from "/images/couple-img.png";
import MockNav from '../components/MockNav';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Navigation from '../components/Navigation';

function Greetings() {
  useGSAP(() => {
    gsap.from(".transition-from-bottom", {
      opacity: 0,
      duration: 1.2,
      y: 30,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });
  useGSAP(() => {
    gsap.from(".transition-from-top", {
      opacity: 0,
      duration: 1.2,
      y: -30,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });
  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-[100dvh] bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="flex flex-col items-center justify-center w-full h-full text-[#AA873C] transition">
        <div className='border-x-4 border-y-2 border-[#AA873C] w-[240px] h-auto md:w-[240px] md:h-[460px] rounded-full px-2 p-2 transition-from-top'>
          <img src={coupleImage} alt="couple" className='rounded-full w-full h-full object-cover' />
        </div>
        <div className='mt-6 w-48 pb-20 transition-from-bottom'>
          <p className='text-center text-[10px] md:text-xs'>Salam</p>
          <p className='text-center text-xs md:text-sm font-light'>Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara resepsi pernikahan anak kami</p>
        </div>
      </div>
    </div>
  )
}

export default Greetings