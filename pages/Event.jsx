import Decoration from "../components/Decoration";
import { IconPlant2 } from "@tabler/icons-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ElCountdown from "../components/ElCountdown";
import Countdown from "react-countdown";

function Event() {
  // target date: 28 September 2025
  const targetDate = new Date("2025-12-07T00:00:00").getTime();
  useGSAP(() => {
    gsap.from(".transition-from-bottom", {
      opacity: 0,
      duration: 1.2,
      y: 30,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });
  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-[100dvh] bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-110px)]">
            <p className="text-xs font-semibold text-[#AA873C] flex items-center gap-1 transition-from-bottom">
              <IconPlant2 width={15} />
              Akad pernikahan
              <IconPlant2 width={15} />
            </p>
            <p className="text-sm transition-from-bottom">
              Pukul 08.00 WIB - Selesai
            </p>
            <div className="javassoul my-8 text-center transition-from-bottom">
              <h1 className="text-5xl">Minggu</h1>
              <h1 className="text-6xl text-[#AA873C] mt-2">23.06.25</h1>
            </div>
            <p className="text-xs font-semibold text-[#AA873C] flex items-center gap-1 transition-from-bottom">
              <IconPlant2 width={15} />
              Kediaman Wanita
              <IconPlant2 width={15} />
            </p>
            <p className="text-sm font-light transition-from-bottom">
              Perum KCVRI
            </p>
            <p className="text-sm font-light transition-from-bottom">
              Blok A. No. 09 RT 01/RW 07
            </p>
            <Countdown date={targetDate} renderer={ElCountdown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
