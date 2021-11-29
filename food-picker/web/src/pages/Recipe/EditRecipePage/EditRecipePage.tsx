import EditRecipeCell from 'src/components/Recipe/EditRecipeCell'

type RecipePageProps = {
  id: String
}

const EditRecipePage = ({ id }: RecipePageProps) => {
  return <EditRecipeCell id={id} />
}

export default EditRecipePage
