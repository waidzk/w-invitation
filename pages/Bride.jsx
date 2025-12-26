import Decoration from "../components/Decoration";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "../components/Image";

function Bride() {
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
    <div className="relative overflow-hidden max-w-[450px] w-full min-h-screen h-auto bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="w-full h-full flex justify-center">
        <div className="flex flex-col justify-between items-center">
          <div className="w-56 md:w-64 mb-8 md:mb-10 pt-20 text-[#AA873C] text-center transition-from-top">
            <h1 className="javassoul text-4xl md:text-5xl">
              Raras Ayu Septyastuti Ali Dewi
            </h1>
            <p className="text-xs pl-2">Putri pertama dari</p>
            <p className="text-sm pl-2">
              Ali Hariyanto & <br /> Ni Nyoman Kirwati, S.E., M.Si
            </p>
          </div>
          <div className="w-64 h-[600px] md:h-[500px] rounded-t-full border-2 border-[#AA873C] px-1 pt-1 transition-from-bottom">
            <Image
              className={"rounded-t-full h-full object-cover"}
              src={"/images/Foto Bride.webp"}
              placeholder="data:image/png;base64,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"
              alt={"bride"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bride;
