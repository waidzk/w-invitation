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
    <div className="relative overflow-hidden max-w-[450px] w-full h-svh bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center h-[calc(100svh-110px)]">
            <div className="w-full h-96 p-4 transition-from-top">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.7710690429826!2d115.2597289!3d-8.3255325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd221007a90f2fb%3A0xd1f4088046ffff2c!2sPondok%20Lusuh!5e0!3m2!1sid!2sid!4v1765334623385!5m2!1sid!2sid"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>
            <div className="text-center mt-3 transition-from-bottom">
              <h1 className="text-base md:text-xl text-[#AA873C] font-semibold">
                Pondok Lusuh
              </h1>
              <p className="w-64 text-sm px-2 md:text-base">
                Br. Pausan, Desa Buahan Kaja, Kecamatan Payangan, Kabupaten Gianyar
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/oJQcRu6nC9S8ufbN6"
              className="px-5 py-2 bg-[#AA873C] text-white text-sm md:text-base rounded-full mt-4 transition-from-bottom"
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
