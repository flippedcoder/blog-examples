import EditMealCell from 'src/components/Meal/EditMealCell'

type MealPageProps = {
  id: String
}

const EditMealPage = ({ id }: MealPageProps) => {
  return <EditMealCell id={id} />
}

export default EditMealPage
