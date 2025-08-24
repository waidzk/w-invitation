import Decoration from "../components/Decoration";
import MockNav from "../components/MockNav";

function Thanks() {
  return (
    <div className="relative overflow-hidden max-w-[450px] w-full h-[100dvh] bg-slate-100 bg-[url(/images/layer.png)] bg-cover bg-left">
      <Decoration />
      <div className="absolute top-0 w-full h-full z-100">
        <div className="flex flex-col justify-center p-6">
          <div className="bg-white/40 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center h-[calc(100vh-100px)]">
            <p className="text-center w-[350px] text-[#755d29]">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kedua mempelai.
            </p>
            <div className="w-[300px] flex items-center gap-2 mt-5">
              <div className="w-1/2 flex flex-col text-center">
                <p className="text-xs underline">Keluarga</p>
                <p className="font-bold text-sm">Bapak Novar</p>
                <p className="font-bold text-sm">Ibu Novar</p>
              </div>
              <div className="w-1/2 flex flex-col text-center">
                <p className="text-xs underline">Keluarga</p>
                <p className="font-bold text-sm">Bapak Raras</p>
                <p className="font-bold text-sm">Ibu Raras</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MockNav prevPage="/gift" />
    </div>
  );
}

export default Thanks;
