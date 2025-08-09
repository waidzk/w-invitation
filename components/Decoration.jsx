import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import fw_l from "/images/fw-l.png";
import mid_fw_l from "/images/mid-fw-l.png";
import fw_r from "/images/fw-r.png";
import mid_fw_r from "/images/mid-fw-r.png";
import big_fw from "/images/big-fw.png";
import fw_bl from "/images/fw-bl.png";
import fw_br from "/images/fw-br.png";

function Decoration() {
  useGSAP(() => {
    gsap.from(".fw-l", {
      opacity: 0,
      duration: 1.2,
      y: 30,
      x: -30,
      stagger: 0.2,
      ease: "power1.out",
    });
  });
  useGSAP(() => {
    gsap.from(".fw-r", {
      opacity: 0,
      duration: 1.2,
      y: 30,
      x: 30,
      stagger: 0.2,
      ease: "power1.out",
    });
  });

  useGSAP(() => {
    gsap.to(".big-fw-l", {
      rotation: "-360",
      repeat: -1,
      duration: 20,
      ease: "none",
    });
  }, []);
  useGSAP(() => {
    gsap.to(".big-fw-r", {
      rotation: "360",
      repeat: -1,
      duration: 20,
      ease: "none",
    });
  }, []);

  useGSAP(() => {
    gsap.to(".fw-bl", {
      rotation: 5,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "sine.inOut",
      transformOrigin: "center bottom",
    });
  });
  useGSAP(() => {
    gsap.to(".fw-br", {
      rotation: -5,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "sine.inOut",
      transformOrigin: "center bottom",
    });
  });

  return (
    <div>
      {/* <img
        src={fw_l}
        className="absolute -top-[160px] -left-[50px] h-[520px] fw-l rotate-45"
      />
      <img
        src={fw_r}
        className="absolute -top-[160px] -right-[50px] h-[520px] fw-r -rotate-45"
      /> */}
      {/* left top */}
      <img
        src={fw_l}
        className="absolute -top-[80px] -left-[150px] h-[520px] fw-l"
      />
      {/* left middle */}
      <img
        src={mid_fw_l}
        className="absolute top-[300px] -left-[160px] h-[600px] fw-l"
      />
      {/* right top */}
      <img
        src={fw_r}
        className="absolute -top-[80px] -right-[150px] h-[520px] fw-r"
      />
      {/* right middle */}
      <img
        src={mid_fw_r}
        className="absolute top-[300px] -right-[160px] h-[600px] fw-r"
      />
      {/* rotate flowers */}
      <img
        src={big_fw}
        className="absolute top-[260px] -left-[80px] h-[180px] big-fw-l fw-l"
      />
      <img
        src={big_fw}
        className="absolute top-[260px] -right-[80px] h-[180px] big-fw-r fw-r"
      />
      {/* bottom flowers */}
      <img src={fw_bl} className="absolute bottom-0 left-0 h-[180px] fw-bl fw-l" />
      <img src={fw_br} className="absolute bottom-0 right-0 h-[180px] fw-br fw-r" />
    </div>
  );
}

export default Decoration;
