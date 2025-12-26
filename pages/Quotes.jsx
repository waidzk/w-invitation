import Decoration from "../components/Decoration";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "../components/Image";

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
    <div className="relative overflow-hidden max-w-[450px] w-full h-svh bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-110px)]">
            <div className="border-x-4 border-y-2 border-[#AA873C] w-[200px] md:w-[240px] h-auto md:h-[400px] rounded-t-full px-2 p-2 transition-from-top">
              <Image
                className={"rounded-t-full w-full h-full object-cover"}
                src={"/images/Foto Quotes.webp"}
                placeholder="data:image/png;base64,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"
                alt={"couple"}
              />
            </div>
            <div className="w-[240px] font-light text-sm md:text-base/5 text-center mt-2 text-[#6c5524] transition-from-bottom">
              "Two hearts, two paths, nine years intertwined through ups and
              downs, countless memories, storms and sunshine, growing into an
              unbreakable bond of one love, now beginning one journey called
              marriage—a lifetime to go"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
