import React, { useState } from 'react'
import Form from '~components/Form/Form'
import Input from '~components/Form/Input'
import Button from '~components/Button/Button'
import Space from '~components/Space/Space'
import Checkbox from '~components/Form/Checkbox'
import Portal from '~components/Portal/Portal'
import Modal from '~components/Modal/Modal'
import Heading from '~components/Typography/Heading'
import RichContent from '~components/RichContent/RichContent'

const validateEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase()
  )

const TicketForm = ({
  labels,
  consentText,
  checkboxLabel,
  successBody
}) => {
  const initalFormData = {
    email: '',
    firstname: '',
    lastname: '',
    newsletter: false,
  }
  const initialFormState = {
    pristine: true,
    valid: false,
    invalid: false,
    hasBeenValid: false,
    loading: false,
  }

  const [formData, setFormData] = useState({ ...initalFormData })
  const [formState, setFormState] = useState({ ...initialFormState })
  const [response, setResponse] = useState({ posted: false, error: false })
  const [modalActive, handleModalActive] = useState(false)

  const handleEmail = ({ value }) => {
    const valid = validateEmail(value)
    setFormState((state) => ({
      ...state,
      valid: valid,
      invalid: state.hasBeenValid && !valid,
      hasBeenValid: state.hasBeenValid ? true : valid,
    }))
  }

  const handleChange = ({ target }) => {
    setFormData((state) => ({
      ...state,
      [target.name]: target.value,
    }))
    if (target.name === 'email') {
      handleEmail(target)
    }
  }

  const handleBlur = ({ target }) => {
    const valid = validateEmail(target.value)
    setFormState((state) => ({
      ...state,
      invalid: !valid,
    }))
  }

  const handleToggleCheckbox = ({ target }) => {
    setFormData((state) => ({
      ...state,
      [target.name]: target.checked,
    }))
  }

  const onFocus = () =>
    setFormState((state) => ({
      ...state,
      pristine: false,
    }))

  const handleSubmit = async () => {
    if (!formState.valid) {
      return
    }

    setFormState((state) => ({ ...state, loading: true }))
    // no-undef disabled because of global variable 'process'
    /* eslint-disable no-undef */

    /*     const response = await fetch(process.env.MAIL_ENDPOINT, {
          method: 'POST',
          headers: {
            Authorization: `SharedAccessSignature ${process.env.MAIL_TOKEN}`,
          },
          body: JSON.stringify({ ...formData }),
        }) */

    /* eslint-enable no-undef */
    setTimeout(() => {
      setFormState((state) => ({ ...state, loading: false }))
      setResponse({ posted: true, error: response.status !== 201 })
      handleModalActive(true)
      resetForm()
    }, 2000)
  }

  const resetForm = () => {
    setResponse({ posted: false, error: false })
    setFormState({ ...initialFormState })
    setFormData({ ...initalFormData })
  }

  return (
    <>
      <Form>
        <Input
          label={labels.email}
          name="email"
          invalid={formState.invalid && !formState.pristine}
          invalidText={
            formData.email
              ? "That's not a correct e-mail address!"
              : 'You must enter something here!'
          }
          valid={formState.valid}
          isFlashing={formState.pristine}
          attrs={{
            type: 'email',
            disabled: formState.loading,
            onFocus: onFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            value: formData.email,
          }}
        />
        <Input
          label={labels.firstname}
          name="firstname"
          attrs={{
            type: 'text',
            disabled: formState.loading,
            onChange: handleChange,
            value: formData.firstname,
          }}
        />
        <Input
          label={labels.lastname}
          name="lastname"
          attrs={{
            type: 'text',
            disabled: formState.loading,
            onChange: handleChange,
            value: formData.lastname,
          }}
        />
        <Space t={2}>
          <Checkbox
            name="newsletter"
            attrs={{
              onChange: handleToggleCheckbox,
              checked: formData.newsletter,
              disabled: formState.loading,
            }}
          >
            <RichContent content={checkboxLabel} />
          </Checkbox>
          <RichContent content={consentText} />
        </Space>
        <Space t={3}>
          <Button
            loading={formState.loading}
            onClick={handleSubmit}
            block="small"
            alignCenter
            disabled={!formState.valid}
          >
            {labels.submit}
          </Button>
        </Space>
      </Form>
      <Portal>
        <Modal
          handleModal={() => handleModalActive(!modalActive)}
          isActive={modalActive}
        >
          {successBody ? (
            <RichContent content={successBody} />
          ) : (
            <Heading>Success</Heading>
          )}
        </Modal>
      </Portal>
    </>
  )
}

export default TicketForm
