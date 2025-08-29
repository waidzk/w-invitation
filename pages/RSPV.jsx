import React from "react";
import MockNav from "../components/MockNav";
import Decoration from "../components/Decoration";

function RSPV() {
  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-[100dvh] bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/40 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <h1 className="javassoul text-2xl text-[#AA873C]">RSPV</h1>
            <h1 className="javassoul text-2xl text-[#AA873C]">
              Belum Jadi :')
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSPV;
