import Decoration from "../components/Decoration";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "../components/Image";
import { IconHandMove } from "@tabler/icons-react";
import { use } from "react";

function Greetings() {
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
  useGSAP(() => {
    gsap.from(".icon-hand-move", {
      duration: 1.2,
      x: -140,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-svh bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="flex flex-col items-center justify-center w-full h-full text-[#AA873C] transition">
        <div className="border-x-4 border-y-2 border-[#AA873C] w-[200px] h-96 md:w-[240px] md:h-[460px] rounded-full px-2 p-2 transition-from-top">
          <Image
            className={"rounded-full w-full h-full object-cover"}
            src={"/images/foto-greetings.webp"}
            placeholder="data:image/png;base64,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"
            alt={"couple"}
          />
        </div>
        <div className="mt-6 w-40 md:w-48 pb-20 transition-from-bottom">
          <p className="text-center text-3xl javassoul">Om Swastyastu</p>
          <p className="text-center text-xs md:text-sm font-light">
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i pada acara resepsi pernikahan putra putri kami
          </p>
          <p className="flex justify-end">
            <IconHandMove size={32} className="icon-hand-move" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Greetings;
