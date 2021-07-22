import { useQuery } from '@redwoodjs/web'
import styled from 'styled-components'

const Img = styled.img`
  display: block;
  position: absolute;
  top: ${(props) => (props.dataLocation === 'mid-left' ? '35%' : 'unset')};
  right: ${(props) => (props.dataLocation === 'mid-left' ? 'unset' : '0')};
  width: 360px;
`

const OptionPage = () => {
  const { loading, data } = useQuery(LAYOUT, {
    variables: { id: 2 },
  })

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>User Info</h1>
      <Img src={data.layout.imageUrl} dataLocation={data.layout.dataLocation} />
      <p>
        Find me in <code>./web/src/pages/OptionPage/OptionPage.js</code>
      </p>
      <p>{data.layout.name}</p>
    </>
  )
}

const LAYOUT = gql`
  query layout($id: Int!) {
    layout(id: $id) {
      id
      name
      dataLocation
      imageUrl
      userId
    }
  }
`

export default OptionPage
