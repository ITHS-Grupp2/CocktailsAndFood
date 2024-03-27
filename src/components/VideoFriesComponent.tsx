import FriesVideo from "../videos/Fries.mp4";

export const VideoFriesComponent = () => {
  return (
    <div
      style={{
        width: "300px",
        overflow: "hidden",
        display: "block",
        height: "100%",
      }}
    >
      <video
        autoPlay
        loop
        muted
        id="video"
        style={{ transform: "translate(-50%)", height: "100%" }}
      >
        <source src={FriesVideo} type="video/mp4" />
      </video>
    </div>
  );
};
