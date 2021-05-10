import React from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

function App() {
  const baseDims = {
    w: 500,
    h: 300,
    dp: 15,
  };

  const secDims = {
    hadp: baseDims.h + baseDims.dp,
    wadp: baseDims.w + baseDims.dp,
  };

  const imagePaths = ["beach-boat", "fish-vegetables"];

  return (
    <CloudinaryContext cloudName="milecia">
      {imagePaths.map((imgPath) => (
        <div>
          <Image publicId={imgPath}>
            <Transformation
              width={baseDims.w}
              height={baseDims.h}
              crop="fill"
            />
            <Transformation
              width={baseDims.w}
              height={baseDims.h}
              overlay={imgPath}
              opacity="60"
              border="1px_solid_rgb:FFFFFF"
              crop="fill"
            />
            <Transformation
              width={baseDims.dp}
              height={baseDims.h}
              gravity="east"
              crop="crop"
            />
            <Transformation angle="hflip" />
            <Transformation
              effect={`distort:0:0:${baseDims.dp}:${baseDims.dp}:${baseDims.dp}:${secDims.hadp}:0:${baseDims.h}`}
            />
            <Transformation
              x={`${baseDims.dp} * -1`}
              gravity="north_east"
              flags="layer_apply"
            />
            <Transformation
              width={baseDims.w}
              height={baseDims.h}
              overlay={imgPath}
              opacity="60"
              border="1px_solid_rgb:FFFFFF"
              crop="fill"
            />
            <Transformation
              width={baseDims.w}
              height={baseDims.dp}
              gravity="south"
              crop="crop"
            />
            <Transformation angle="vflip" />
            <Transformation
              effect={`distort:0:0:${baseDims.w}:0:${secDims.wadp}:${baseDims.dp}:${baseDims.dp}:${baseDims.dp}`}
            />
            <Transformation gravity="south" flags="layer_apply" />
            <Transformation quality="auto" fetchFormat="auto" />
          </Image>
        </div>
      ))}
    </CloudinaryContext>
  );
}

export default App;
