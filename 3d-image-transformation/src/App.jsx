import React from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

function App() {
  return (
    <CloudinaryContext cloudName="milecia">
      <div>
        <Image publicId="samples/animals/kitten-playing.gif" crop="scale" />
      </div>
      <Image publicId="sample">
        <Transformation width="700" height="500" crop="fill" />
        <Transformation
          width="700"
          height="500"
          overlay="sample"
          opacity="60"
          border="1px_solid_rgb:FFFFFF"
          crop="fill"
        />
        <Transformation width="20" height="500" gravity="east" crop="crop" />
        <Transformation angle="hflip" />
        <Transformation effect="distort:0:0:20:20:20:520:0:500" />
        <Transformation x="-20" y="9" gravity="east" flags="layer_apply" />
        <Transformation
          width="700"
          height="500"
          overlay="sample"
          opacity="60"
          border="1px_solid_rgb:FFFFFF"
          crop="fill"
        />
        <Transformation width="700" height="20" gravity="south" crop="crop" />
        <Transformation angle="vflip" />
        <Transformation effect="distort:0:0:700:0:720:20:20:20" />
        <Transformation y="-1" gravity="south" flags="layer_apply" />
        <Transformation quality="auto" fetchFormat="auto" />
      </Image>
      <div>
        <Image
          publicId="sample"
          variables={[
            ["$w", "700"],
            ["$h", "500"],
            ["$dp", "20"],
            ["$wadp", "$w + $dp"],
            ["$hadp", "$h + $dp"],
          ]}
        >
          <Transformation width="$w" height="$h" crop="fill" />
          <Transformation
            width="$w"
            height="$h"
            overlay="sample"
            opacity="60"
            border="1px_solid_rgb:FFFFFF"
            crop="fill"
          />
          <Transformation width="$dp" height="$h" gravity="east" crop="crop" />
          <Transformation angle="hflip" />
          <Transformation effect="distort:0:0:$dp:$dp:$dp:$hadp:0:$h" />
          <Transformation
            x="$dp * -1"
            gravity="north_east"
            flags="layer_apply"
          />
          <Transformation
            width="$w"
            height="$h"
            overlay="sample"
            opacity="60"
            border="1px_solid_rgb:FFFFFF"
            crop="fill"
          />
          <Transformation width="$w" height="$dp" gravity="south" crop="crop" />
          <Transformation angle="vflip" />
          <Transformation effect="distort:0:0:$w:0:$wadp:$dp:$dp:$dp" />
          <Transformation gravity="south" flags="layer_apply" />
          <Transformation quality="auto" fetchFormat="auto" />
        </Image>
      </div>
    </CloudinaryContext>
  );
}

export default App;
