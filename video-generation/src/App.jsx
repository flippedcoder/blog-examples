import React from "react";

function App() {
  const vidVars = {
    w: 500,
    h: 500,
    du: 15,
    sdur: 3000,
    tdur: 1500,
    mediaDocs: ["kitten_playing", "three_dogs", "reindeer", "cat"],
  };

  return (
    <>
      <div>
        <video width="650" height="720" controls>
          <source
            src={`https://res.cloudinary.com/milecia/video/upload/fn_render:w_${
              vidVars.w
            };h_${vidVars.h};du_${vidVars.du};vars_(sdur_${vidVars.sdur};tdur_${
              vidVars.tdur
            };transition_s:circlecrop;slides_(${vidVars.mediaDocs
              .map((mediaDoc) => `(media_i:docs:${mediaDoc})`)
              .join(";")}))/f_auto,q_auto/slideshow.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video width="650" height="720" controls>
          <source
            src="https://res.cloudinary.com/milecia/video/upload/fn_render:w_1500;h_1500;du_20;vars_(sdur_3000;tdur_1500;transition_s:circlecrop;slides_((media_i:docs:kitten_playing);(media_i:docs:reindeer);(media_i:docs:cat)))/f_auto,q_auto/slideshow.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <video width="650" height="720" controls>
          <source
            src="https://res.cloudinary.com/demo/video/upload/fn_render:w_500;h_500;du_20;vars_(sdur_3000;tdur_1500;transition_s:circlecrop;slides_((media_i:docs:shoppable_sunglasses);(media_i:docs:shoppable_dress);(media_i:docs:shoppable_bag2);(media_i:docs:shoppable_bag)))/f_auto,q_auto/slideshow.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default App;

/**
 * Todo:
 * move pics to root in cloudinary and rename with underscore
 * replace images array with those names
 */
