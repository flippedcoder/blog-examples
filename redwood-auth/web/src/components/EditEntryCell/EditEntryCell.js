import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import EntryForm from 'src/components/EntryForm'

export const QUERY = gql`
  query FindEntryById($id: Int!) {
    entry: entry(id: $id) {
      id
      purchaseName
      date
      description
      amount
      category
    }
  }
`
const UPDATE_ENTRY_MUTATION = gql`
  mutation UpdateEntryMutation($id: Int!, $input: UpdateEntryInput!) {
    updateEntry(id: $id, input: $input) {
      id
      purchaseName
      date
      description
      amount
      category
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ entry }) => {
  const [updateEntry, { loading, error }] = useMutation(UPDATE_ENTRY_MUTATION, {
    onCompleted: () => {
      toast.success('Entry updated')
      navigate(routes.entries())
    },
  })

  const onSave = (input, id) => {
    updateEntry({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Entry {entry.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EntryForm
          entry={entry}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
