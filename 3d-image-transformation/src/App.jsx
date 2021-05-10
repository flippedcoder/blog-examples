import React from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

function App() {
  const mainImgVariables = {
    w: 500,
    h: 500,
    dp: 15,
  };

  const secImgVariables = {
    hadp: mainImgVariables.h + mainImgVariables.dp,
    wadp: mainImgVariables.w + mainImgVariables.dp,
  };

  return (
    <CloudinaryContext cloudName="milecia">
      <div>
        <Image publicId="beach-boat.jpg">
          <Transformation
            width={mainImgVariables.w}
            height={mainImgVariables.h}
            crop="fill"
          />
          <Transformation
            width={mainImgVariables.w}
            height={mainImgVariables.h}
            overlay="beach-boat.jpg"
            opacity="60"
            border="1px_solid_rgb:FFFFFF"
            crop="fill"
          />
          <Transformation
            width={mainImgVariables.dp}
            height={mainImgVariables.h}
            gravity="east"
            crop="crop"
          />
          <Transformation angle="hflip" />
          <Transformation
            effect={`distort:0:0:${mainImgVariables.dp}:${mainImgVariables.dp}:${mainImgVariables.dp}:${secImgVariables.hadp}:0:${mainImgVariables.h}`}
          />
          <Transformation
            x={`${mainImgVariables.dp} * -1`}
            gravity="north_east"
            flags="layer_apply"
          />
          <Transformation
            width={mainImgVariables.w}
            height={mainImgVariables.h}
            overlay="beach-boat.jpg"
            opacity="60"
            border="1px_solid_rgb:FFFFFF"
            crop="fill"
          />
          <Transformation
            width={mainImgVariables.w}
            height={mainImgVariables.dp}
            gravity="south"
            crop="crop"
          />
          <Transformation angle="vflip" />
          <Transformation
            effect={`distort:0:0:${mainImgVariables.w}:0:${secImgVariables.wadp}:${mainImgVariables.dp}:${mainImgVariables.dp}:${mainImgVariables.dp}`}
          />
          <Transformation gravity="south" flags="layer_apply" />
          <Transformation quality="auto" fetchFormat="auto" />
        </Image>
      </div>
    </CloudinaryContext>
  );
}

export default App;
