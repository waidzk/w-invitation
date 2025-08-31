import { IconTie } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import { IconPhoto } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconGift } from "@tabler/icons-react";
import { IconQuote } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { IconFlower } from "@tabler/icons-react";
import { IconMailHeart } from "@tabler/icons-react";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import RSPV from "../pages/RSPV";

function NavTab({ label, isActive, onClick }) {
  const tabRef = useRef(null);

  // Scroll ke tengah saat active
  useEffect(() => {
    if (isActive && tabRef.current) {
      tabRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [isActive]);

  return (
    <button
      ref={tabRef}
      className={`p-2 rounded-full border-2 border-[#AA873C] text-[#cca757] font-bold bg-red-900 w-fit flex gap-1 items-center transition-all ease-in-out duration-500 ${!isActive ? "pl-3" : ""}`}
      onClick={onClick}
    >
      {label === "Greetings" && <IconMailHeart stroke={2} size={35} />}
      {label === "Groom" && <IconTie stroke={2} size={35} />}
      {label === "Bride" && <IconFlower stroke={2} size={35} />}
      {label === "Event" && <IconCalendarEvent stroke={2} size={35} />}
      {label === "Maps" && <IconMapPin stroke={2} size={35} />}
      {label === "Gallery" && <IconPhoto stroke={2} size={35} />}
      {label === "Quotes" && <IconQuote stroke={2} size={35} />}
      {label === "RSPV" && <IconMail stroke={2} size={35} />}
      {label === "Gift" && <IconGift stroke={2} size={35} />}
      {label === "Thanks" && <IconHeart Flower stroke={2} size={35} />}

      <div className="overflow-hidden">
        <span
          className={`inline-block transition-all duration-500 ease-in-out transform text-xl
        ${
          isActive
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 w-0"
        }
      `}
        >
          {label == "RSPV" ? "RSVP" : label}
        </span>
      </div>
    </button>
  );
}

export default NavTab;
