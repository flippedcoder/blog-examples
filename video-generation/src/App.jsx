import React from "react";
import styled from "styled-components";

const Video = styled.video`
  height: 200px;
  padding: 24px;
  width: 350px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

function App() {
  const vidVars = {
    w: 500,
    h: 500,
    du: 15,
    sdur: 3000,
    tdur: 1500,
  };

  const vidA = ["3dogs", "reindeer", "cat"];

  const vidB = ["reindeer", "3dogs", "dessert"];

  const vidC = ["3dogs", "reindeer", "sample"];

  const vidD = {
    images: ["reindeer", "sample"],
    videos: ["elephants", "sea-turtle"]
  }

  return (
    <VideoContainer>
      <Video controls>
        <source
          src={`https://res.cloudinary.com/milecia/video/upload/fn_render:w_${
            vidVars.w
          };h_${vidVars.h};du_${vidVars.du};vars_(sdur_${vidVars.sdur};tdur_${
            vidVars.tdur
          };transition_s:circlecrop;slides_(${vidA
            .map((mediaDoc) => `(media_i:${mediaDoc})`)
            .join(";")}))/f_auto,q_auto/slideshow.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </Video>
      <Video controls>
        <source
          src={`https://res.cloudinary.com/milecia/video/upload/fn_render:w_${
            vidVars.w
          };h_${vidVars.h};du_${vidVars.du};vars_(sdur_${vidVars.sdur};tdur_${
            vidVars.tdur
          };transition_s:circlecrop;slides_(${vidB
            .map((mediaDoc) => `(media_i:${mediaDoc})`)
            .join(";")}))/f_auto,q_auto/slideshow.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </Video>
      <Video controls>
        <source
          src={`https://res.cloudinary.com/milecia/video/upload/fn_render:w_${
            vidVars.w
          };h_${vidVars.h};du_${vidVars.du};vars_(sdur_${vidVars.sdur};tdur_${
            vidVars.tdur
          };transition_s:circlecrop;slides_(${vidC
            .map((mediaDoc) => `(media_i:${mediaDoc})`)
            .join(";")}))/f_auto,q_auto/slideshow.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </Video>
      <Video controls>
        <source
          src={`https://res.cloudinary.com/milecia/video/upload/fn_render:w_${
            vidVars.w
          };h_${vidVars.h};du_${vidVars.du};vars_(sdur_${vidVars.sdur};tdur_${
            vidVars.tdur
          };transition_s:circlecrop;slides_(${vidD.images
            .map((mediaDoc) => `(media_i:${mediaDoc})`)
            .join(";")}${vidD.videos
            .map((mediaDoc) => `(media_v:${mediaDoc};type_s:video)`)
            .join(";")}))/f_auto,q_auto/slideshow.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
}

export default App;
