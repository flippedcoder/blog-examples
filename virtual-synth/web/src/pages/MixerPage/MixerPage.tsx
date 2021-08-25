import { useState } from 'react'
import * as Tone from 'tone'
import styled from 'styled-components'

const MixerPage = () => {
  const [mix, setMix] = useState([])
  const notes = ['G3', 'A6', 'C9', 'B5', 'D7', 'F1', 'E8', 'A7', 'G6', 'B1', 'F4', 'C5']
  // create a new synth and route the output to speaker
  const synth = new Tone.MembraneSynth().toDestination()

  // play a note with the synth we setup
  const playSynth = (note) => {
    synth.triggerAttackRelease(note, "6n")

    const isSet = mix.includes(note)

    if (!isSet) {
      setMix([...mix, note])
    } else {
      const index = mix.findIndex((mixNote) => mixNote === note)
      const deletedNote = mix.splice(index, 1)
      setMix(deletedNote)
    }

    console.log(mix)
  }

  const saveMix = (mix) => {
    console.log(mix)
  }

  return (
    <>
      <h1>Mixer Page</h1>
      <Flex>
        {notes.map(note => (
          <Square onClick={() => playSynth(note)} />
        ))}
      </Flex>
      <button onClick={() => saveMix(mix)}>Save Sounds</button>
    </>
  )
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Square = styled.div`
  background-color: #414423;
  border: 2px solid #313131;
  height: 250px;
  width: 250px;
`

export default MixerPage
