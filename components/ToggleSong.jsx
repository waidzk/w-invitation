import { IconMusicOff } from "@tabler/icons-react";
import { IconMusic } from "@tabler/icons-react";
import { useRef } from "react";
import { useState } from "react";

function ToggleSong({ autoPlay = false }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="absolute bottom-20 right-0 z-100 px-5">
      {/* Audio element */}
      <audio ref={audioRef} src="/song.mp3" loop autoPlay={autoPlay} />
      <div className="flex flex-col items-end gap-2">
        <button
          onClick={togglePlay}
          className="rounded-full p-3 text-white bg-white/20 backdrop-blur-md"
        >
          {isPlaying ? (
            <IconMusic stroke={2} size={30} />
          ) : (
            <IconMusicOff stroke={2} size={30} />
          )}
        </button>
      </div>
    </div>
  );
}

export default ToggleSong;
