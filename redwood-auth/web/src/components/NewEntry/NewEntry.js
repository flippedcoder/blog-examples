import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import EntryForm from 'src/components/EntryForm'

const CREATE_ENTRY_MUTATION = gql`
  mutation CreateEntryMutation($input: CreateEntryInput!) {
    createEntry(input: $input) {
      id
    }
  }
`

const NewEntry = () => {
  const [createEntry, { loading, error }] = useMutation(CREATE_ENTRY_MUTATION, {
    onCompleted: () => {
      toast.success('Entry created')
      navigate(routes.entries())
    },
  })

  const onSave = (input) => {
    createEntry({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Entry</h2>
      </header>
      <div className="rw-segment-main">
        <EntryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEntry
