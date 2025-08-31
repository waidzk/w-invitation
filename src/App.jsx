import "./App.css";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import Opening from "../pages/Opening";
import Greetings from "../pages/Greetings";
import Bride from "../pages/Bride";
import Groom from "../pages/Groom";
import Event from "../pages/Event";
import Maps from "../pages/Maps";
import Gallery from "../pages/Gallery";
import Quotes from "../pages/Quotes";
import Gift from "../pages/Gift";
import RSPV from "../pages/RSPV";
import Thanks from "../pages/Thanks";
import NavTab from "../components/NavTab";
import ToggleSong from "../components/ToggleSong";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "Opening"; // default Opening
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isPlaying, setIsPlaying] = useState(false);

  const tabs = [
    "Greetings",
    "Groom",
    "Bride",
    "Event",
    "Maps",
    "Gallery",
    "Quotes",
    "RSPV",
    "Gift",
    "Thanks",
  ];

  // update URL param jika tab berubah
  useEffect(() => {
    if (activeTab !== "Opening") {
      setSearchParams({ tab: activeTab });
    } else {
      setSearchParams({}); // hapus param jika Opening
    }
  }, [activeTab, setSearchParams]);

  // handler ketika keluar dari Opening
  const handleOpen = () => {
    setActiveTab("Greetings");
    setIsPlaying(true);
    const elem = document.documentElement; // seluruh halaman
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      // Chrome, Safari, Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      // IE/Edge lama
      elem.msRequestFullscreen();
    }
  };

  return (
    <div className="flex justify-center bg-[#d3c8af]">
      {/* Tab Content */}
      {activeTab === "Opening" && <Opening onClick={handleOpen} />}
      {activeTab === "Greetings" && <Greetings />}
      {activeTab === "Groom" && <Groom />}
      {activeTab === "Bride" && <Bride />}
      {activeTab === "Event" && <Event />}
      {activeTab === "Maps" && <Maps />}
      {activeTab === "Gallery" && <Gallery />}
      {activeTab === "Quotes" && <Quotes />}
      {activeTab === "RSPV" && <RSPV />}
      {activeTab === "Gift" && <Gift />}
      {activeTab === "Thanks" && <Thanks />}

      {/* Tab Navigation */}
      {activeTab !== "Opening" && (
        <>
          <div className="absolute bottom-0 max-w-[445px] w-full z-100 px-5">
            <div className="flex items-center gap-2 w-full bg-white/20 backdrop-blur-md rounded-t-2xl p-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {tabs.map((tab) => (
                <NavTab
                  key={tab}
                  label={tab}
                  isActive={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                />
              ))}
            </div>
          </div>
          <ToggleSong autoPlay={isPlaying} />
        </>
      )}
    </div>
  );
}

export default App;
