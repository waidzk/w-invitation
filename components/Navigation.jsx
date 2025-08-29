import React from "react";
import { IconMailHeart, IconFlower, IconTie } from "@tabler/icons-react";

function Navigation({ activeTab }) {
  return (
    <div className="absolute bottom-0 w-full z-100 px-5 pb-3">
      <div className="flex items-center gap-2 w-full bg-white/20 backdrop-blur-md rounded-full p-2">
        <a href="/greetings" className="p-2 rounded-full border-2 border-white text-white bg-red-900 w-fit flex gap-1 items-center">
          <IconMailHeart stroke={2} />
          <span className={activeTab == "greetings" ? "" : "hidden"}>
            Greetings
          </span>
        </a>
        <a href="/groom" className="p-2 rounded-full border-2 border-white w-fit">
          <IconTie stroke={2} color="#fff" />
          <span className={activeTab == "groom" ? "" : "hidden"}>Groom</span>
        </a>
        <a href="/bride" className="p-2 rounded-full border-2 border-white w-fit">
          <IconFlower stroke={2} color="#fff" />
          <span className={activeTab == "bride" ? "" : "hidden"}>Bride</span>
        </a>
      </div>
    </div>
  );
}

export default Navigation;
