import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const VideoForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.video?.id)
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
          defaultValue={props.video?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="duration"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Duration
        </Label>
        <TextField
          name="duration"
          defaultValue={props.video?.duration}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          dataType="Float"
        />
        <FieldError name="duration" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>
        <TextField
          name="url"
          defaultValue={props.video?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="url" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VideoForm