import React from "react";
import MockNav from "../components/MockNav";
import Decoration from "../components/Decoration";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Maps() {
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
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/40 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <div className="w-full h-96 p-4 transition-from-top">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.706629986856!2d106.76783677515402!3d-6.558668864115626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c48c0e27cb95%3A0xd09b1ba0957655e6!2sHarmony%20Banquet%20Halls!5e0!3m2!1sid!2sid!4v1756018143831!5m2!1sid!2sid"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="text-center mt-3 transition-from-bottom">
              <h1 className="text-xl text-[#AA873C] font-semibold">
                Harmony Banquet Halls
              </h1>
              <p className="w-64">
                Jl. KH. R. Abdullah Bin Nuh, RT.06/RW.02, Curugmekar, Kec. Bogor
                Bar., Kota Bogor
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/phnPmHZr5NhfpoW66"
              className="px-5 py-2 bg-[#AA873C] text-white rounded-full mt-4 transition-from-bottom"
            >
              Buka Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;
