import Decoration from "../components/Decoration";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useFancybox from "../components/useFancybox";
import Image from "../components/Image";

function Gallery() {
  const [fancyboxRef] = useFancybox();
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

  const wideImages = [
    1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33,
  ];

  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-[100dvh] bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl flex flex-col items-center pt-14 h-[calc(100vh-110px)] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <h1 className="javassoul text-2xl text-[#AA873C] transition-from-top">
              Our gallery
            </h1>
            <div ref={fancyboxRef} className="grid grid-cols-3 gap-2 px-2">
              {Array.from({ length: 25 }, (_, i) => i + 1).map((id) => (
                <div
                  key={id}
                  className={
                    wideImages.includes(id) ? "h-40" : "col-span-2 h-40"
                  }
                >
                  <a
                    data-fancybox="gallery"
                    href={`/images/prewed/foto (${id}).webp`}
                  >
                    <Image
                      src={`/images/prewed/foto (${id}).webp`}
                      alt={`prewed ${id}`}
                      className="h-full w-full object-cover transition-from-bottom"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
