import React from "react";
import Decoration from "../components/Decoration";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Opening({ onClick }) {
  useGSAP(() => {
    gsap.from(".transition", {
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
      <div className="flex flex-col justify-center items-center w-full h-full text-[#AA873C] transition">
        <img src="/images/frame.png" className="mb-2 w-32 sm:w-64" />
        <h5 className="mb-6 text-xs">The Wedding of</h5>
        <div className="flex flex-col items-center javassoul mb-10">
          <h1 className="text-6xl sm:text-7xl">Novar</h1>
          <h2 className="text-3xl">&</h2>
          <h1 className="text-6xl sm:text-7xl">Raras</h1>
        </div>
        <div className="bg-white/15 backdrop-blur-xs mb-4 p-5 flex flex-col items-center w-48 rounded-xl">
          <p className="text-xs">Kepada yth,</p>
          <p className="text-xs">Bapak/Ibu, Saudara/i</p>
          <h1 className="text-2xl">Andi</h1>
        </div>
        <button
          onClick={onClick}
          className="w-fit p-2 px-5 z-100 bg-[#AA873C] rounded-full text-white flex justify-center text-sm"
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
}

export default Opening;
