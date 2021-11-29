import { useQuery } from '@redwoodjs/web'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

const PickerPage = () => {
  const [meal, setMeal] = useState<Meal>()
  const { loading, data } = useQuery(GET_MEALS)

  if (loading) {
    return <div>Loading...</div>
  }

  const loadMeal = () => {
    if (data.meals.length !== 0) {
      const max = data.meals.length
      const index = getRandomInt(0, max)
      setMeal(data.meals[index])
    }
  }

  return (
    <>
      <MetaTags
        title="Picker"
      />
      <h1>{meal ? meal.title : 'Find out what you are going to eat'}</h1>
      <button onClick={loadMeal} style={{ fontSize: '18px', padding: '24px 32px', width: '500px' }}>Tell me what to eat</button>
      {meal &&
        <>
          <p>{meal.recipe}</p>
          <video src={meal.video} controls height='350' width='500'></video>
        </>
      }
    </>
  )
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const GET_MEALS = gql`
  query {
    meals {
      title
      recipe
      video
    }
  }
`

interface Meal {
  title: string
  recipe: string
  video: string
}

export default PickerPage
