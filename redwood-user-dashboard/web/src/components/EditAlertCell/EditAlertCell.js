import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AlertForm from 'src/components/AlertForm'

export const QUERY = gql`
  query FIND_ALERT_BY_ID($id: Int!) {
    alert: alert(id: $id) {
      id
      name
      priority
      teamId
    }
  }
`
const UPDATE_ALERT_MUTATION = gql`
  mutation UpdateAlertMutation($id: Int!, $input: UpdateAlertInput!) {
    updateAlert(id: $id, input: $input) {
      id
      name
      priority
      teamId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ alert }) => {
  const [updateAlert, { loading, error }] = useMutation(UPDATE_ALERT_MUTATION, {
    onCompleted: () => {
      toast.success('Alert updated')
      navigate(routes.alerts())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { teamId: parseInt(input.teamId) })
    updateAlert({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Alert {alert.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AlertForm
          alert={alert}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
