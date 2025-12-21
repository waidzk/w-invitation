import { useState, useEffect, useRef } from "react";

import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function useFancybox(options = {}) {
  const [root, setRoot] = useState(null);
  const optionsRef = useRef(options);

  // Update options ref without causing re-bind
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    if (root) {
      // Ensure fullscreen is properly exited and styles are restored
      const handleClose = () => {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
        // Clean up all Fancybox related styles
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.body.style.visibility = "visible";
        document.body.style.width = "";
        
        // Remove any fancybox backdrop
        const backdrop = document.querySelector(".fancybox__backdrop");
        if (backdrop) {
          backdrop.remove();
        }
        
        // Force layout recalculation
        void document.body.offsetHeight;
      };

      Fancybox.bind(root, "[data-fancybox]", {
        ...optionsRef.current,
        on: {
          ...optionsRef.current?.on,
          close: (fancybox) => {
            handleClose();
            optionsRef.current?.on?.close?.(fancybox);
          }
        }
      });

      return () => {
        Fancybox.unbind(root);
        handleClose();
      };
    }
  }, [root]);

  return [setRoot];
}