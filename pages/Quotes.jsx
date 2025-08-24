import React from "react";
import Decoration from "../components/Decoration";
import MockNav from "../components/MockNav";

function Quotes() {
  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-[100dvh] bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/40 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <div className="border-x-4 border-y-2 border-[#AA873C] w-[240px] h-auto md:h-[400px] rounded-t-full px-2 p-2">
              <img
                src="/images/couple-img.png"
                alt="couple"
                className="rounded-t-full w-full h-full object-cover"
              />
            </div>
            <div className="w-[240px] font-light text-base/5 text-center mt-2 text-[#6c5524]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore nisi laboriosam nesciunt modi porro exercitationem maiores id? Minima placeat debitis adipisci, nihil fugit ea unde necessitatibus repellendus expedita repellat.
            </div>
          </div>
        </div>
      </div>
      <MockNav prevPage="/gallery" nextPage="/rspv" />
    </div>
  );
}

export default Quotes;
