import { VideoFriesComponent } from "./VideoFriesComponent";
import React, { ReactNode } from "react";

type VideoProviderProps = {
  children: ReactNode;
};

export const VideoWrapper: React.FC<VideoProviderProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          gridColumn: "1",
          width: "300px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <VideoFriesComponent />
      </div>
      <div style={{ gridColumn: "2" }}>{children}</div>
      <div style={{ gridColumn: "3" }}>
        <VideoFriesComponent />
      </div>
    </div>
  );
};
