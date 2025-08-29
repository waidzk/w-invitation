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
      className="p-2 rounded-full border-2 border-white text-white bg-red-900 w-fit flex gap-1 items-center transition-all ease-in-out duration-1000"
      onClick={onClick}
    >
      {label === "Greetings" && <IconMailHeart stroke={2} />}
      {label === "Groom" && <IconTie stroke={2} color="#fff" />}
      {label === "Bride" && <IconFlower stroke={2} color="#fff" />}
      {label === "Event" && <IconCalendarEvent stroke={2} />}
      {label === "Maps" && <IconMapPin stroke={2} color="#fff" />}
      {label === "Gallery" && <IconPhoto stroke={2} color="#fff" />}
      {label === "Quotes" && <IconQuote stroke={2} color="#fff" />}
      {label === "RSPV" && <IconMail stroke={2} color="#fff" />}
      {label === "Gift" && <IconGift stroke={2} color="#fff" />}
      {label === "Thanks" && <IconHeart Flower stroke={2} color="#fff" />}

      <span
        className={`transition-all duration-1000 ease-in-out transform 
    ${
      isActive
        ? "opacity-100 translate-x-0 ml-1"
        : "opacity-0 -translate-x-2 w-0"
    }
  `}
      >
        {label}
      </span>
    </button>
  );
}

export default NavTab;
