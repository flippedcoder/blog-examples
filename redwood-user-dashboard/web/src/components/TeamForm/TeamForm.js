import { useState } from 'react'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import styled from 'styled-components'
import ImageUploader from 'react-images-upload'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const TeamForm = (props) => {
  const [uploadedPictures, setUploadedPictures] = useState([])

  const onSubmit = (data) => {
    uploadedPictures.map((picture) => {
      const reader = new FileReader()

      reader.readAsDataURL(picture[0])

      reader.onload = function () {
        const base64Url = reader.result

        props.onSave({...data, teamImg: base64Url}, props?.team?.id)

        location.reload()
      }
    })
  }

  const onDrop = (picture) => {
    setUploadedPictures([...uploadedPictures, picture])
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.team?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />
        <Container>
          <ImageUploader
            withIcon={true}
            withPreview={true}
            buttonText="Choose images"
            onChange={(image) => onDrop(image)}
            singleImage={true}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={52428800}
          />
        </Container>
        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

const Container = styled.div`
  margin: auto;
  width: 500px;
`

export default TeamForm
