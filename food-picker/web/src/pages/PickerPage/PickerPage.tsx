import styled from 'styled-components'
import { useQuery } from '@redwoodjs/web'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

const PickerPage = () => {
  const { loading, data } = useQuery(GET_RECIPES)
  const [recipe, setRecipe] = useState<Recipe>()

  if (loading) {
    return <div>Loading...</div>
  }

  const loadRecipe = () => {
    if (data.recipes.length !== 0) {
      const max = data.recipes.length
      const index = getRandomInt(0, max)
      setRecipe(data.recipes[index])
    }
  }

  return (
    <>
      <MetaTags
        title="Picker"
      />
      <h1>{recipe ? recipe.title : 'Find out what you are going to eat'}</h1>
      <Button onClick={loadRecipe}>Tell me what to eat</Button>
      {recipe &&
        <>
          <p>{recipe.details}</p>
          <video src={recipe.video} controls height='350' width='500'></video>
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

const GET_RECIPES = gql`
  query {
    recipes {
      title
      details
      video
    }
  }
`

interface Recipe {
  title: string
  details: string
  video: string
}

const Button = styled.button`
  font-size: 18px;
  padding: 24px 32px;
  width: 500px;
`

export default PickerPage
