import { useEffect, useRef, useState } from "react";

const Image = ({ src, placeholder, alt, className, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Pastikan kita di client (browser)
    if (typeof window === "undefined" || !imgRef.current) return;

    let highResImg = null;
    const node = imgRef.current;

    const onIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Gunakan window.Image untuk menghindari collision / SSR issues
          try {
            highResImg = new window.Image();
          } catch (e) {
            // Fallback jika new Image() gagal — gunakan createElement
            highResImg = document.createElement("img");
          }

          // Mulai load high-res
          highResImg.src = src;

          highResImg.onload = () => {
            setCurrentSrc(src);
            setLoaded(true);
          };

          highResImg.onerror = () => {
            setError(true);
            setLoaded(true); // agar placeholder hilang bila ingin
          };

          // stop observing
          observer.unobserve(entry.target);
        }
      });
    };

    // Jika IntersectionObserver tidak tersedia (browser lama), langsung load
    if (!("IntersectionObserver" in window)) {
      // langsung load high-res
      try {
        highResImg = new window.Image();
      } catch (e) {
        highResImg = document.createElement("img");
      }
      highResImg.src = src;
      highResImg.onload = () => {
        setCurrentSrc(src);
        setLoaded(true);
      };
      highResImg.onerror = () => {
        setError(true);
        setLoaded(true);
      };
      return () => {
        if (highResImg) {
          highResImg.onload = null;
          highResImg.onerror = null;
        }
      };
    }

    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.1,
    });
    observer.observe(node);

    // cleanup
    return () => {
      observer.disconnect();
      if (highResImg) {
        highResImg.onload = null;
        highResImg.onerror = null;
      }
    };
  }, [src]);

  return (
    <>
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={className}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: loaded ? "blur(0px)" : "blur(20px)",
          transform: loaded ? "scale(1)" : "scale(1.05)",
          transition:
            "filter 0.45s ease, transform 0.45s ease, opacity 0.45s ease",
          opacity: error ? 0.5 : 1,
        }}
        {...props}
      />
    </>
  );
};

export default Image;
