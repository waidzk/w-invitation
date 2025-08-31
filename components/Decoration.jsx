import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import fw_l from "/images/fw-l.png";
import mid_fw_l from "/images/mid-fw-l.png";
import fw_r from "/images/fw-r.png";
import mid_fw_r from "/images/mid-fw-r.png";

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


  return (
    <div>
      {/* <img
        src={fw_l}
        className="absolute -top-[220px] -left-[50px] h-[520px] fw-l rotate-45 z-60"
      />
      <img
        src={fw_r}
        className="absolute -top-[220px] -right-[50px] h-[520px] fw-r -rotate-45 z-60"
      /> */}
      {/* left top */}
      <img
        src={fw_l}
        className="absolute -top-[80px] -left-[150px] md:-left-[140px] h-[520px] fw-l z-50"
      />
      {/* left middle */}
      <img
        src={mid_fw_l}
        className="absolute top-[300px] -left-[180px] md:-left-[140px] h-[600px] fw-l z-10 rotate-180"
      />
      {/* right top */}
      <img
        src={fw_r}
        className="absolute -top-[80px] -right-[150px] md:-right-[140px] h-[520px] fw-r z-50"
      />
      {/* right middle */}
      <img
        src={mid_fw_r}
        className="absolute top-[300px] -right-[180px] md:-right-[140px] h-[600px] fw-r z-10 rotate-180"
      />
      {/*  butterfly top */}
      <div className="butterfly butterfly-small butterfly-left animation-3 absolute top-[30px] left-[30px] fw-l z-100"></div>
      <div className="butterfly butterfly-small butterfly-right animation-2 absolute top-[50px] -right-[20px] fw-r z-100"></div>
      {/*  butterfly middle */}
      <div className="butterfly butterfly-large butterfly-left animation-1 absolute top-[300px] md:top-[350px] left-[20px] fw-l z-100"></div>
      <div className="butterfly butterfly-large butterfly-right animation-3 absolute top-[280px] md:top-[330px] -right-3 fw-r z-100"></div>
      {/*  butterfly bottom */}
      <div className="butterfly butterfly-small butterfly-left animation-1 absolute bottom-[120px] left-[40px] fw-l z-100"></div>
      <div className="butterfly butterfly-small butterfly-right animation-2 absolute bottom-[120px] right-[10px] fw-r z-100"></div>

      <img
        src={fw_l}
        className="absolute -bottom-[220px] -left-[80px] lg:-left-[50px] h-[520px] fw-l -rotate-45"
      />
      <img
        src={fw_r}
        className="absolute -bottom-[220px] -right-[80px] lg:-right-[50px] h-[520px] fw-r rotate-45"
      />

    </div>
  );
}

export default Decoration;
