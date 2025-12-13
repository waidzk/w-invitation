import React, { useState, useRef, useEffect, useCallback } from "react";

// Drawer Component
const Drawer = ({ isOpen, onClose, children, snapPoints = [1, 2] }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragStartTranslate, setDragStartTranslate] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(window.innerHeight);
  const drawerRef = useRef(null);
  const isOpenRef = useRef(isOpen);

  const snapHeights = snapPoints
    .map((p) => window.innerHeight * (1 - p))
    .sort((a, b) => a - b);

  const defaultHeight = snapHeights[snapHeights.length - 1];

  useEffect(() => {
    isOpenRef.current = isOpen;
    if (isOpen) {
      setCurrentTranslate(defaultHeight);
      document.body.style.overflow = "hidden";
    } else {
      setCurrentTranslate(window.innerHeight);
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 300);
    }
  }, [isOpen, defaultHeight]);

  const findNearestSnap = useCallback(
    (translateY) => {
      return snapHeights.reduce((prev, curr) =>
        Math.abs(curr - translateY) < Math.abs(prev - translateY) ? curr : prev
      );
    },
    [snapHeights]
  );

  const handleDragStart = useCallback(
    (clientY) => {
      setIsDragging(true);
      setDragStartY(clientY);
      setDragStartTranslate(currentTranslate);
    },
    [currentTranslate]
  );

  const handleDragMove = useCallback(
    (clientY) => {
      if (!isDragging) return;

      const deltaY = clientY - dragStartY;
      let newTranslate = dragStartTranslate + deltaY;

      // Add resistance when dragging beyond bounds
      if (newTranslate < snapHeights[0]) {
        const excess = snapHeights[0] - newTranslate;
        newTranslate = snapHeights[0] - excess * 0.3;
      }

      if (newTranslate > window.innerHeight) {
        newTranslate = window.innerHeight;
      }

      setCurrentTranslate(newTranslate);
    },
    [isDragging, dragStartY, dragStartTranslate, snapHeights]
  );

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaY = currentTranslate - dragStartTranslate;
    const velocity = deltaY;
    const closeThreshold = window.innerHeight * 0.3;

    // Close if dragged down significantly or fast
    if (currentTranslate > closeThreshold || velocity > 100) {
      setCurrentTranslate(window.innerHeight);
      setTimeout(() => {
        if (isOpenRef.current) {
          onClose();
        }
      }, 200);
      return;
    }

    // Snap to nearest point
    const nearest = findNearestSnap(currentTranslate);
    setCurrentTranslate(nearest);
  }, [
    isDragging,
    currentTranslate,
    dragStartTranslate,
    findNearestSnap,
    onClose,
  ]);

  // Mouse handlers
  const handleMouseDown = useCallback(
    (e) => {
      if (
        e.target.closest("[data-drawer-handle]") ||
        e.target.closest("[data-drawer-header]")
      ) {
        e.preventDefault();
        handleDragStart(e.clientY);
      }
    },
    [handleDragStart]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        handleDragMove(e.clientY);
      }
    },
    [isDragging, handleDragMove]
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      handleDragEnd();
    }
  }, [isDragging, handleDragEnd]);

  // Touch handlers
  const handleTouchStart = useCallback(
    (e) => {
      if (
        e.target.closest("[data-drawer-handle]") ||
        e.target.closest("[data-drawer-header]")
      ) {
        handleDragStart(e.touches[0].clientY);
      }
    },
    [handleDragStart]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (isDragging) {
        handleDragMove(e.touches[0].clientY);
      }
    },
    [isDragging, handleDragMove]
  );

  const handleTouchEnd = useCallback(() => {
    if (isDragging) {
      handleDragEnd();
    }
  }, [isDragging, handleDragEnd]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove, { passive: false });
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  const overlayOpacity = Math.max(
    0,
    Math.min(1, 1 - currentTranslate / window.innerHeight)
  );

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 touch-none pointer-events-none"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity * 0.5})`,
          transition: isDragging ? "none" : "background-color 0.3s ease",
          pointerEvents: isOpen ? "auto" : "none",
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed left-0 right-0 bottom-0 h-screen bg-white rounded-t-2xl shadow-2xl z-50 flex flex-col touch-none"
        style={{
          transform: `translateY(${currentTranslate}px)`,
          transition: isDragging
            ? "none"
            : "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
          willChange: "transform",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Handle */}
        <div
          data-drawer-handle
          className={`py-3 flex justify-center flex-shrink-0 select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <div className="w-10 h-1.5 bg-gray-300 rounded-full transition-colors" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-5 pb-5">
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;