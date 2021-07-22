import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import LayoutForm from 'src/components/Layout/LayoutForm'

export const QUERY = gql`
  query FindLayoutById($id: Int!) {
    layout: layout(id: $id) {
      id
      name
      dataLocation
      imageUrl
      userId
    }
  }
`
const UPDATE_LAYOUT_MUTATION = gql`
  mutation UpdateLayoutMutation($id: Int!, $input: UpdateLayoutInput!) {
    updateLayout(id: $id, input: $input) {
      id
      name
      dataLocation
      imageUrl
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ layout }) => {
  const [updateLayout, { loading, error }] = useMutation(
    UPDATE_LAYOUT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Layout updated')
        navigate(routes.layouts())
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    updateLayout({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Layout {layout.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LayoutForm
          layout={layout}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
