import { MetaTags } from '@redwoodjs/web'
import { useQuery } from '@redwoodjs/web'
import PieChart from '../../components/PieChart/PieChart'

const GET_FRUITS = gql`
  query {
    fruits {
      label
      value
    }
  }
`

const ChartsPage = () => {
  const { data, loading } = useQuery(GET_FRUITS)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <MetaTags
        title="Charts"
      />

      <h1>ChartsPage</h1>
      <PieChart data={data.fruits} />
    </>
  )
}

export default ChartsPage
