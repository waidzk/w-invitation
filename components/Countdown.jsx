import Countdown from "react-countdown";

// Random component
const Completionist = () => <span></span>;

// Renderer callback with condition
const Countdown = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

export default Countdown;