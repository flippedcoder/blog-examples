import ImageCell from 'src/components/Image/ImageCell'

type ImagePageProps = {
  id: Int
}

const ImagePage = ({ id }: ImagePageProps) => {
  return <ImageCell id={id} />
}

export default ImagePage
