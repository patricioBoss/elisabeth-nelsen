import react from "react";

const VideoPlayer = () => {
  return (
    <div className="player-wrapper">
      <video
        controls
        src="https://f004.backblazeb2.com/file/pipsville-bucket/video-1.mp4"
        poster="https://f004.backblazeb2.com/file/pipsville-bucket/video-poster.png"
        width="820"
      >
        sorry, your browser doesn&apos;t support embedded videos, but don&apos;t
        worry, you can{" "}
        <a href="https://f004.backblazeb2.com/file/pipsville-bucket/video-1.mp4">
          download it
        </a>
        and watch it with your favorite video player!
      </video>
    </div>
  );
};

export default VideoPlayer;
