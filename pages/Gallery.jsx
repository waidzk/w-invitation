import React from "react";
import Decoration from "../components/Decoration";
import MockNav from "../components/MockNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Gallery() {
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
          <div className="bg-white/40 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <h1 className="javassoul text-2xl text-[#AA873C] transition-from-top">
              Our gallery
            </h1>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 h-40">
                <img
                  src="/images/prewed.jpg"
                  alt="prewedd"
                  className="h-full w-full object-cover transition-from-bottom"
                />
              </div>
              <div className="h-40">
                <img
                  src="/images/prewed.jpg"
                  alt="prewedd"
                  className="h-full w-full object-cover transition-from-bottom"
                />
              </div>
              <div className="h-40">
                <img
                  src="/images/prewed.jpg"
                  alt="prewedd"
                  className="h-full w-full object-cover transition-from-bottom"
                />
              </div>
              <div className="col-span-2 h-40">
                <img
                  src="/images/prewed.jpg"
                  alt="prewedd"
                  className="h-full w-full object-cover transition-from-bottom"
                />
              </div>
              <div className="col-span-2 h-40">
                <img
                  src="/images/prewed.jpg"
                  alt="prewedd"
                  className="h-full w-full object-cover transition-from-bottom"
                />
              </div>
              <div className="h-40">
                <img
                  src="/images/prewed.jpg"
                  alt="prewedd"
                  className="h-full w-full object-cover transition-from-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
