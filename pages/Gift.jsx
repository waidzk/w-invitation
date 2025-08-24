import React from "react";
import Decoration from "../components/Decoration";
import MockNav from "../components/MockNav";

function Gift() {
  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-[100dvh] bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/40 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <h1 className="javassoul text-4xl text-[#AA873C]">Tanda Kasih</h1>
            <p className="text-center w-[300px]">
              Terima kasih telah menambah semangat kegembiraan pernikahan kami
              dengan kehadiran dan hadiah indah Anda.
            </p>
            <div className="w-[300px] flex flex-col gap-2 mt-5">
                <button className="px-5 py-2 bg-[#AA873C] rounded-full text-white cursor-pointer">Cashless</button>
                <button className="px-5 py-2 bg-[#AA873C] rounded-full text-white cursor-pointer">Kado</button>
            </div>
          </div>
        </div>
      </div>
      <MockNav prevPage="/rspv" nextPage="/thanks" />
    </div>
  );
}

export default Gift;
