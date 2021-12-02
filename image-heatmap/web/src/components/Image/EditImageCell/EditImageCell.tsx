import type { EditImageById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ImageForm from 'src/components/Image/ImageForm'

export const QUERY = gql`
  query EditImageById($id: Int!) {
    image: image(id: $id) {
      id
      name
      url
    }
  }
`
const UPDATE_IMAGE_MUTATION = gql`
  mutation UpdateImageMutation($id: Int!, $input: UpdateImageInput!) {
    updateImage(id: $id, input: $input) {
      id
      name
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ image }: CellSuccessProps<EditImageById>) => {
  const [updateImage, { loading, error }] = useMutation(UPDATE_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Image updated')
      navigate(routes.images())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateImage({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Image {image.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ImageForm image={image} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
