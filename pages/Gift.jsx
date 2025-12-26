import Decoration from "../components/Decoration";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import Modal from "../components/Modal";
import { IconCheck, IconCopy } from "@tabler/icons-react";

function Gift() {
  const [modalCashless, setModalCashless] = useState(false);
  const [modalKado, setModalKado] = useState(false);
  const [isCopied1, setIsCopied1] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);

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

              <button
                onClick={() => setModalKado(true)}
                className="px-5 py-2 bg-[#AA873C] text-sm rounded-full text-white cursor-pointer transition-from-bottom"
              >
                Kado
              </button>
            </div>
            <Modal
              isOpen={modalCashless}
              onClose={() => setModalCashless(false)}
              title="Cashless"
            >
              <div className="flex flex-col gap-2">
                <div class="card flex flex-row items-center gap-10 text-gray-800">
                  <div class="box w-130 h-52 bg-gray-200 rounded-lg relative shadow-2xl overflow-hidden">
                    <div class="status flex w-full justify-between px-9 py-7 relative z-10"></div>
                    <div class="x bg-slate-300 svg-bg w-14 h-14 absolute top-5 left-5 rounded-md z-10"></div>
                    <img
                      src="/images/logo-bni-new.png"
                      alt="BNI"
                      class="absolute top-5 right-5 z-0 w-28"
                    />
                    <div class="x absolute bottom-7 left-5 z-10">
                      <div className="flex gap-2">
                        <h1 class="x text-2xl font-bold">0699756482</h1>
                        <button
                          className="text-gray-600 hover:text-gray-800"
                          onClick={() => {
                            navigator.clipboard.writeText("0699756482");
                            setIsCopied1(true);
                            setTimeout(() => setIsCopied1(false), 2000);
                          }}
                        >
                          {isCopied1 ? (
                            <IconCheck size={20} />
                          ) : (
                            <IconCopy size={20} />
                          )}
                        </button>
                      </div>
                      <h2 class="x font-bold tracking-wider">
                        Kadek Novar Setiawan
                      </h2>
                    </div>
                    <div class="x w-140 h-140 bg-white/60 pattern-bg rounded-full absolute top-3 right-0"></div>
                    <div class="x w-140 h-140 border-2 border-white rounded-full absolute top-15 left-80 z-10"></div>
                  </div>
                </div>
                <div class="card flex flex-row items-center gap-10 text-gray-800">
                  <div class="box w-130 h-52 bg-gray-200 rounded-lg relative shadow-2xl overflow-hidden">
                    <div class="status flex w-full justify-between px-9 py-7 relative z-10"></div>
                    <div class="x bg-slate-300 svg-bg w-14 h-14 absolute top-5 left-5 rounded-md z-10"></div>
                    <img
                      src="/images/bri-logo.png"
                      alt="BRI"
                      class="absolute top-5 right-5 z-0 w-24"
                    />
                    <div class="x absolute bottom-7 left-5 z-10">
                      <div className="flex gap-2">
                        <h1 class="x text-2xl font-bold">472101024183539</h1>
                        <button
                          className="text-gray-600 hover:text-gray-800"
                          onClick={() => {
                            navigator.clipboard.writeText("472101024183539");
                            setIsCopied2(true);
                            setTimeout(() => setIsCopied2(false), 2000);
                          }}
                        >
                          {isCopied2 ? (
                            <IconCheck size={20} />
                          ) : (
                            <IconCopy size={20} />
                          )}
                        </button>
                      </div>
                      <h2 class="x font-bold tracking-wider">
                        Raras Ayu Septyastuti Ali Dewi
                      </h2>
                    </div>
                    <div class="x w-140 h-140 bg-white/60 pattern-bg rounded-full absolute top-3 right-0"></div>
                    <div class="x w-140 h-140 border-2 border-white rounded-full absolute top-15 left-80 z-10"></div>
                  </div>
                </div>
              </div>
            </Modal>

            <Modal
              isOpen={modalKado}
              onClose={() => setModalKado(false)}
              title="Alamat Pengiriman Kado"
            >
              <div className="flex flex-col gap-2">
                <a
                  className="underline text-blue-500 cursor-pointer"
                  href="https://goo.gl/maps/rcuvHLWjTt9Jjgp78"
                >
                  Br. Untal Untal, Kec.Kuta Utara
                </a>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift;
