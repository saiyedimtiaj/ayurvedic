import React from "react";

const VideoComponent = () => {
  return (
    <div className="container mx-auto mb-5 pt-2 px-2">
      <div className="relative pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-md"
          src="https://www.youtube.com/embed/Ga4JGX_IiiA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
