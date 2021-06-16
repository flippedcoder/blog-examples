import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import AlertForm from 'src/components/AlertForm'

import { QUERY } from 'src/components/AlertsCell'

const CREATE_ALERT_MUTATION = gql`
  mutation CreateAlertMutation($input: CreateAlertInput!) {
    createAlert(input: $input) {
      id
    }
  }
`

const NewAlert = () => {
  const [createAlert, { loading, error }] = useMutation(CREATE_ALERT_MUTATION, {
    onCompleted: () => {
      toast.success('Alert created')
      navigate(routes.alerts())
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { teamId: parseInt(input.teamId) })
    createAlert({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Alert</h2>
      </header>
      <div className="rw-segment-main">
        <AlertForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAlert
