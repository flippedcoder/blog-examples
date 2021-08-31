import { MetaTags } from '@redwoodjs/web'
import { useRef, useEffect } from 'react'

const VisualizerPage = () => {
  const app = useRef();

  useEffect(() => {
    let newP5 = new p5(sketch, app.current);

    return () => {
      newP5.remove();
    };
  }, []);

  const sketch = p => {
    let mic, fft, canvas;

    p.setup = () => {
      canvas = p.createCanvas(710, 400);
      p.noFill();

      mic = new p5.AudioIn();
      mic.start();
      p.getAudioContext().resume()
      fft = new p5.FFT();
      fft.setInput(mic);
    }

    p.draw = () => {
      p.background(200);

      let spectrum = fft.analyze();

      p.beginShape();
      p.stroke('#1d43ad')
      p.strokeWeight('3')

      spectrum.forEach((spec, i) => {
        p.vertex(i, p.map(spec, 0, 255, p.height, 0));
      })

      p.endShape();
    }

    p.keyPressed = () => {
      if (p.keyCode === 39) {
        p.saveCanvas('canvasSnapshot', 'png')
      }
    }
  }

  return (
    <>
      <MetaTags
        title="Visualizer"
        description="Visualizer description"
      />

      <h1>Simple audio visualizer</h1>
      <p>
        This will take any sounds picked up by your mic and make a simple visualization for them.
        </p>
      <div ref={app}></div>
    </>
  )
}

export default VisualizerPage
