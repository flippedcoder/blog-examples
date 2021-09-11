import RecipeCell from 'src/components/Recipe/RecipeCell'

type RecipePageProps = {
  id: String
}

const RecipePage = ({ id }: RecipePageProps) => {
  return <RecipeCell id={id} />
}

export default RecipePage
