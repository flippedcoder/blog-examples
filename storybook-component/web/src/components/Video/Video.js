const Video = ({ videoSrc, width, height, controls }) => {
  return (
    <video width={width} height={height} controls={controls}>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video
