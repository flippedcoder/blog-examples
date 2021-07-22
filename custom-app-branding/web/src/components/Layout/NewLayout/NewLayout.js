import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import LayoutForm from 'src/components/Layout/LayoutForm'

const CREATE_LAYOUT_MUTATION = gql`
  mutation CreateLayoutMutation($input: CreateLayoutInput!) {
    createLayout(input: $input) {
      id
    }
  }
`

const NewLayout = () => {
  const [createLayout, { loading, error }] = useMutation(
    CREATE_LAYOUT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Layout created')
        navigate(routes.layouts())
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    createLayout({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Layout</h2>
      </header>
      <div className="rw-segment-main">
        <LayoutForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLayout
