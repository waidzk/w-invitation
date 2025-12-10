import React from "react";
import Decoration from "../components/Decoration";
import MockNav from "../components/MockNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Gift() {
  useGSAP(() => {
    gsap.from(".transition-from-bottom", {
      opacity: 0,
      duration: 1.2,
      y: 30,
      stagger: 0.2,
      ease: "power1.inOut",
    });

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
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-110px)]">
            <h1 className="javassoul text-3xl text-[#AA873C] transition-from-bottom">Tanda Kasih</h1>
            <p className="text-center text-sm px-8 transition-from-bottom">
              Terima kasih telah menambah semangat kegembiraan pernikahan kami
              dengan kehadiran dan hadiah indah Anda.
            </p>
            <div className="w-full px-8 flex flex-col gap-2 mt-5">
              <button className="px-5 py-2 bg-[#AA873C] text-sm rounded-full text-white cursor-pointer transition-from-bottom">
                Cashless
              </button>
              <button className="px-5 py-2 bg-[#AA873C] text-sm rounded-full text-white cursor-pointer transition-from-bottom">
                Kado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift;
