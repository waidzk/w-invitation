import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import fw_l from "/images/fw-l.png";
import mid_fw_l from "/images/mid-fw-l.png";
import fw_r from "/images/fw-r.png";
import mid_fw_r from "/images/mid-fw-r.png";
import daun_l from "/images/daun-l.png";
import daun_r from "/images/daun-r.png";

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
    gsap.to(".daun", {
      rotation: -2,
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
        className="absolute -top-[220px] -left-[50px] h-[520px] fw-l rotate-45 z-60"
      />
      <img
        src={fw_r}
        className="absolute -top-[220px] -right-[50px] h-[520px] fw-r -rotate-45 z-60"
      /> */}
      {/* left top */}
      <img
        src={fw_l}
        className="absolute -top-[80px] -left-[140px] h-[520px] fw-l z-50"
      />
      {/* left middle */}
      <img
        src={mid_fw_l}
        className="absolute top-[300px] -left-[140px] h-[600px] fw-l z-10 rotate-180"
      />
      {/* right top */}
      <img
        src={fw_r}
        className="absolute -top-[80px] -right-[140px] h-[520px] fw-r z-50"
      />
      {/* right middle */}
      <img
        src={mid_fw_r}
        className="absolute top-[300px] -right-[140px] h-[600px] fw-r z-10 rotate-180"
      />
      {/*  butterfly top */}
      <div class="butterfly butterfly-small butterfly-left absolute top-[30px] left-[30px] fw-l z-100"></div>
      <div class="butterfly butterfly-small butterfly-right absolute top-[50px] -right-[20px] fw-r z-100"></div>
      {/*  butterfly middle */}
      <div class="butterfly butterfly-large butterfly-left absolute top-[350px] left-[50px] fw-l z-100"></div>
      <div class="butterfly butterfly-large butterfly-right absolute top-[300px] right-[5px] fw-r z-100"></div>
      {/*  butterfly bottom */}
      <div class="butterfly butterfly-small butterfly-left absolute bottom-[120px] left-[40px] fw-l z-100"></div>
      <div class="butterfly butterfly-small butterfly-right absolute bottom-[120px] right-[10px] fw-r z-100"></div>

      <img
        src={fw_l}
        className="absolute -bottom-[220px] -left-[50px] h-[520px] fw-l -rotate-45"
      />
      <img
        src={fw_r}
        className="absolute -bottom-[220px] -right-[50px] h-[520px] fw-r rotate-45"
      />

      <img
        src={daun_l}
        className="absolute top-[300px] -left-5 h-[80px] fw-l z-60"
      />
      <img
        src={daun_l}
        className="absolute top-[320px] -left-5 h-[100px] fw-l z-60 rotate-45"
      />
      <img
        src={daun_r}
        className="absolute top-[300px] -right-5 h-[80px] fw-r z-60"
      />
      <img
        src={daun_r}
        className="absolute top-[320px] -right-5 h-[100px] fw-r z-60 -rotate-45"
      />
    </div>
  );
}

export default Decoration;
