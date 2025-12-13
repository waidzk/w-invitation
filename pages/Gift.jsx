import Decoration from "../components/Decoration";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import Modal from "../components/Modal";

function Gift() {
  const [modalCashless, setModalCashless] = useState(false);
  const [modalKado, setModalKado] = useState(false);

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
            <h1 className="javassoul text-3xl text-[#AA873C] transition-from-bottom">
              Tanda Kasih
            </h1>
            <p className="text-center text-sm px-8 transition-from-bottom">
              Terima kasih telah menambah semangat kegembiraan pernikahan kami
              dengan kehadiran dan hadiah indah Anda.
            </p>
            <div className="w-full px-8 flex flex-col gap-2 mt-5">
              <button
                onClick={() => setModalCashless(true)}
                className="px-5 py-2 bg-[#AA873C] text-sm rounded-full text-white cursor-pointer transition-from-bottom"
              >
                Cashless
              </button>

              <button onClick={() => setModalKado(true)} className="px-5 py-2 bg-[#AA873C] text-sm rounded-full text-white cursor-pointer transition-from-bottom">
                Kado
              </button>
            </div>
            <Modal
              isOpen={modalCashless}
              onClose={() => setModalCashless(false)}
              title="Cashless"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <p>Kadek Novar Setiawan</p>
                    <h2 className="text-2xl">BNI | 699756482</h2>
                </div>
                <div className="flex flex-col">
                    <p>Raras Ayu Septyastuti Ali Dewi</p>
                    <h2 className="text-2xl">BRI | 472101024183539</h2>
                </div>
              </div>
            </Modal>

            <Modal
              isOpen={modalKado}
              onClose={() => setModalKado(false)}
              title="Alamat Pengiriman Kado"
            >
              <div className="flex flex-col gap-2">
                <a className="underline text-blue-500 cursor-pointer" href="https://goo.gl/maps/rcuvHLWjTt9Jjgp78">Br. Untal Untal, Kec.Kuta Utara</a>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift;
