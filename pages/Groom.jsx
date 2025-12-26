import Decoration from "../components/Decoration";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "../components/Image";

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
    <div className="relative overflow-hidden max-w-112.5 w-full h-svh bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="w-full h-full flex justify-center">
        <div className="flex flex-col justify-between items-center">
          <div className="w-56 md:w-72 mb-8 md:mb-10 pt-20 text-[#AA873C] text-center flex flex-col items-center transition-from-top">
            <h1 className="javassoul text-3xl md:text-5xl w-full">
              Kadek Novar Setiawan, S.Kom
            </h1>
            <p className="text-xs pl-2">Putra kedua dari</p>
            <p className="text-sm pl-2">Drs. I Wayan Suarsana & <br/> Ni Made Kondriani, S.Pd</p>
          </div>
          <div className="w-64 h-2/3 rounded-t-full border-2 border-[#AA873C] px-1 pt-1 transition-from-bottom">
            <Image
              className={"rounded-t-full h-full object-cover"}
              src={"/images/Foto Groom.webp"}
              placeholder="data:image/png;base64,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"
              alt={"groom"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groom;
