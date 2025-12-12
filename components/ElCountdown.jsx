// Random component
const Completionist = () => <span className="transition-from-bottom text-xs mt-2"></span>;

// Renderer callback with condition
function ElCountdown({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="flex gap-2 transition-from-bottom text-white text-2xl mt-5">
        <div className="flex flex-col items-center">
          <span className="font-light javassoul text-[#AA873C]">Days</span>
          <div className="bg-red-900 p-4 rounded-md">{days}</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-light javassoul text-[#AA873C]">Hours</span>
          <div className="bg-red-900 p-4 rounded-md">{hours}</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-light javassoul text-[#AA873C]">Minutes</span>
          <div className="bg-red-900 p-4 rounded-md">{minutes}</div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-light javassoul text-[#AA873C]">Seconds</span>
          <div className="bg-red-900 p-4 rounded-md">{seconds}</div>
        </div>
      </div>
    );
  }
}

export default ElCountdown;
