import EditImageCell from 'src/components/Image/EditImageCell'

type ImagePageProps = {
  id: number
}

const EditImagePage = ({ id }: ImagePageProps) => {
  return <EditImageCell id={id} />
}

export default EditImagePage
