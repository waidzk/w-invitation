import React from "react";
import Decoration from "../components/Decoration";
import MockNav from "../components/MockNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Quotes() {
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
            <div className="border-x-4 border-y-2 border-[#AA873C] w-[240px] h-auto md:h-[400px] rounded-t-full px-2 p-2 transition-from-top">
              <img
                src="/images/couple-img.png"
                alt="couple"
                className="rounded-t-full w-full h-full object-cover"
              />
            </div>
            <div className="w-[240px] font-light text-base/5 text-center mt-2 text-[#6c5524] transition-from-bottom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              dolore nisi laboriosam nesciunt modi porro exercitationem maiores
              id? Minima placeat debitis adipisci, nihil fugit ea unde
              necessitatibus repellendus expedita repellat.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
