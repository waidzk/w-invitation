import { useGSAP } from "@gsap/react";
import Decoration from "../components/Decoration";
import gsap from "gsap";

function Thanks() {
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
    <div className="relative overflow-hidden max-w-[450px] w-full h-svh bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl relative flex flex-col items-center justify-center h-[calc(100vh-110px)]">
            <p className="text-center w-full px-8 text-sm md:text-base text-[#755d29] transition-from-top">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
              Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu
              kepada putra putri kami.
              Atas kehadiran dan doa restunya, kami ucapkan sekeluarga mengucapkan terima kasih.
            </p>
            <p className="text-center text-3xl javassoul text-[#AA873C] transition-from-top mt-5 pt-5" >Om Shanti, Shanti, Shanti Om</p>
            <div className="w-full px-5 flex items-center gap-2 mt-5">
              <div className="w-1/2 flex flex-col text-center transition-from-bottom">
                <p className="text-xs underline">Keluarga</p>
                <p className="font-bold text-sm">Drs. I Wayan Suarsana</p>
                <p className="font-bold text-sm">Ni Made Kondriani, S.Pd</p>
              </div>
              <div className="w-1/2 flex flex-col text-center transition-from-bottom">
                <p className="text-xs underline">Keluarga</p>
                <p className="font-bold text-sm">Ali Hariyanto</p>
                <p className="font-bold text-sm">Ni Nyoman Kirwati, S.E., M.Si</p>
              </div>
            </div>
            <div className="absolute bottom-0 mb-10 py-5 transition-from-bottom">
              <p className="text-base text-[#AA873C] font-bold">#selaRASbersamaNOVAR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
