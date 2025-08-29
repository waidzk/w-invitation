import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import Navigation from "../components/Navigation";
import { useState } from "react";
import NavTab from "../components/NavTab";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const [activeTab, setActiveTab] = useState("Opening");
  // if ("serviceWorker" in navigator) {
  //   window.addEventListener("load", () => {
  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .then((reg) => console.log("SW registered:", reg))
  //       .catch((err) => console.error("SW failed:", err));
  //   });
  // }

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

  return (
    <div className="flex justify-center bg-[#d3c8af]">
      {/* Tab Content */}
      {activeTab === "Opening" && (
        <Opening onClick={() => setActiveTab("Greetings")} />
      )}
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
      {activeTab != "Opening" && (
        <div className="absolute bottom-0 max-w-[450px] w-full z-100 px-5 pb-3">
          <div className="flex items-center gap-2 w-full bg-white/20 backdrop-blur-md rounded-full p-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
      )}

      {/* <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/greetings" element={<Greetings />} />
        <Route path="/bride" element={<Bride />} />
        <Route path="/groom" element={<Groom />} />
        <Route path="/event" element={<Event />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/rspv" element={<RSPV />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes> */}
    </div>
  );
}

export default App;
