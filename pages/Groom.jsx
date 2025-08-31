import React from "react";
import Decoration from "../components/Decoration";
import MockNav from "../components/MockNav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navigation from "../components/Navigation";

function Groom() {
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
      <div className="w-full h-full flex items-end justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-64 mb-20 md:mb-10 text-[#AA873C] text-center transition-from-top">
            <h1 className="javassoul text-4xl md:text-5xl">
              Kadek Novar Setyawan
            </h1>
            <p className="text-xs pl-2">Putra dari</p>
            <p className="text-sm pl-2">Bapak Novar & Ibu Novar</p>
          </div>
          <div className="w-64 h-[500px] md:h-[600px] rounded-t-full border-2 border-[#AA873C] px-1 pt-1 transition-from-bottom">
            <img
              src="/images/groom.png"
              alt="bride"
              className="rounded-t-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groom;
