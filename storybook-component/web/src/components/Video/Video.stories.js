import Video from './Video'

const Template = args => <Video {...args} />

export const index = () => {
  return (
    <>
      <p>There are several props used in this component.</p>
      <div>
        width: sets the width of the video component
      </div>
      <div>
        height: sets the height of the video component
      </div>
      <div>
        videoSrc: sets the width of the video component
      </div>
      <div>
        controls: sets whether the video controls are shown or not
      </div>
      <Video width="320" height="240" videoSrc="https://res.cloudinary.com/milecia/video/upload/v1606580790/elephant_herd.mp4" controls={true} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  controls: true,
  height: "240",
  width: "320",
  videoSrc: "https://res.cloudinary.com/milecia/video/upload/v1606580790/elephant_herd.mp4"
}

export const Large = Template.bind({})
Large.args = {
  controls: true,
  height: "840",
  width: "1020",
  videoSrc: "https://res.cloudinary.com/milecia/video/upload/v1606580788/sea-turtle.mp4"
}

export const NoControls = Template.bind({})
NoControls.args = {
  controls: false,
  height: "560",
  width: "840",
  videoSrc: "https://res.cloudinary.com/milecia/video/upload/v1606580790/elephant_herd.mp4"
}

export default {
  title: 'Components/Video',
  component: Video
}
