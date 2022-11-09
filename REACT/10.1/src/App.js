import React, { useState, useRef} from "react";
import "./App.css";
import PlayButton from "./PlayButton";
import { videodata } from "./videos";

function App() {
  const [videos, setVideos] = useState(videodata);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(videodata[0]);

  const videoHtml = useRef(null);

  function onPlay1 (){
    const dur = videoHtml.current.duration;
    const curT= videoHtml.current.currentTime;
    console.log(curT,dur)
  }

  return (
    <div className="App">
      <video src={currentVideo.sources}
      // {currentVideo}
      ref={videoHtml} onPlay={onPlay1}></video>


      <PlayButton
        Refrence={videoHtml}
        videos={videos}
        setVideos={setVideos}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />


    </div>
  );
}

export default App;
