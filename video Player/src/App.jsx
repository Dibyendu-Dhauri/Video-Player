import { useState } from "react";
import './app.css'

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};
const videosName = Object.keys(videos)
export default function App() {
  const [videoSrc , setVideoSrc] = useState(videos.deer)

  const getVideoName = (name) => {
     setVideoSrc(videos[name])
     
  }

  return (
    <div >
    <h1> Video Player</h1>
     <Input videosName = {videosName}
     getVideoName = {getVideoName} />
     <Video videoSrc={videoSrc} />
    </div>
  )
}

function Input({videosName,getVideoName}) {

  return (
    <form onClick={e => getVideoName(e.target.value)}>
      {
        videosName.map((name,i) => (
      <div className="video-inputs" key={i}>

        <input  name="src" type = "radio" value={name} />
        {name}
      </div>
        ))
      }
    </form>
  )
}

function Video({ videoSrc }) {
  return (
    <div>
      <video loop controls autostart="true" autoPlay muted src={videoSrc} />
    </div>
  );
}
