import { useState } from 'react'
import * as Tone from 'tone'
import styled from 'styled-components'
import { useMutation } from '@redwoodjs/web'

const MixerPage = () => {
  const [createMix] = useMutation(CREATE_MIX_MUTATION)
  const [mix, setMix] = useState([])
  const [video, setVideo] = useState('')

  const notes = ['G3', 'A6', 'C9', 'B5', 'D7', 'F1', 'E8', 'A7', 'G6', 'B1', 'F4', 'C5']
  const videos = ['https://res.cloudinary.com/milecia/video/upload/v1606580790/elephant_herd.mp4', 'https://res.cloudinary.com/milecia/video/upload/v1606580788/sea-turtle.mp4', 'https://res.cloudinary.com/milecia/video/upload/v1625835105/test0/tq0ejpc2uz5jakz54dsj.mp4', 'https://res.cloudinary.com/milecia/video/upload/v1625799334/test0/ebxcgjdw8fvgnj4zdson.mp4']
  // create a new synth and route the output to speaker
  const mixer = new Tone.MembraneSynth().toDestination()

  // play a note with the synth we setup
  const playNote = (note) => {
    // play the note
    mixer.triggerAttackRelease(note, "6n")

    const isSet = mix.includes(note)

    if (!isSet) {
      // add the selected note to the notes state so that we can save the notes for playback later
      setMix([...mix, note])
    } else {
      // delete the note from the state if the square's been clicked again
      const updateMix = mix.filter((mixNote) => mixNote !== note)
      setMix(updateMix)
    }
  }

  const saveMix = (mix) => {
    const input = { name: `mix-${mix[0]}`, sample: mix.join() }
    createMix({ variables: { input } })
    const randomInt = Math.floor(Math.random() * (videos.length - 1))
    setVideo(videos[randomInt])
  }

  return (
    <>
      <h1>Mixer Page</h1>
      <Flex>
        {notes.map(note => (
          <Square key={note} selected={mix.includes(note)} onClick={() => playNote(note)} />
        ))}
      </Flex>
      <button onClick={() => saveMix(mix)}>Save Sounds</button>
      {video !== '' &&
        <video src={video} width='480' height='360' controls>
        </video>
      }
    </>
  )
}

const CREATE_MIX_MUTATION = gql`
  mutation CreateMixMutation($input: CreateMixInput!) {
    createMix(input: $input) {
      id
    }
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

// change the color of the square when a note's been clicked
const Square = styled.div`
  background-color: ${props => props.selected ? '#ABABAB' : '#EFEFEF'};
  border: 2px solid #313131;
  height: 250px;
  width: 250px;
`

export default MixerPage
