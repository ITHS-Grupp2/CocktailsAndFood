import FriesVideo from "../videos/Fries.mp4";

// Displays FriesVideo from source
export const VideoFriesComponent = () => {
  return (
    <div
      style={{
        width: "300px",
        overflow: "clip",
        display: "block",
        height: "100%",
      }}
    >
      <video
        autoPlay
        loop
        muted
        id="video"
        style={{
          transform: "translate(-50%)",
          height: "100%",
          objectPosition: "50% 50%",
          objectFit: "cover",
        }}
      >
        <source src={FriesVideo} type="video/mp4" />
      </video>
    </div>
  );
};
