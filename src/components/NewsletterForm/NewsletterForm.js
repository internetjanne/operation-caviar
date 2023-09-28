import React, { useState } from 'react'
import classnames from 'classnames'
import Form from '~components/Form/Form'
import Input from '~components/Form/Input'
import Button from '~components/Button/Button'
import Space from '~components/Space/Space'
import Checkbox from '~components/Form/Checkbox'
import Heading from '~components/Typography/Heading'
import TextContent from '~components/TextContent/TextContent'
import * as styles from './newsletterForm.module.scss'

const NewsletterForm = ({
  submitLabel = 'Sign up',
  label = 'Your e-mail address',
  consentContent = (
    <span>
      I accept the{' '}
      <a href="/privacy" target="blank">
        policy
      </a>
      !
    </span>
  ),
  successContent = (
    <>
      <Heading type="h3">Sign up successful</Heading>
      <p>Sign up with another e-mail address?</p>
    </>
  ),
  errorContent = (
    <>
      <Heading type="h3">Sign up failed</Heading>
      <p>Give it another try?</p>
    </>
  ),
}) => {
  const [data, setData] = useState({
    pristine: true,
    valid: false,
    invalid: false,
    email: '',
    consent: false,
    hasBeenValid: false,
  })

  const [response, setResponse] = useState({ posted: false, error: false })
  const [loading, setLoading] = useState(false)

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const handleChange = (e) => {
    const valid = validateEmail(e.target.value)
    setData({
      ...data,
      email: e.target.value,
      valid: valid,
      invalid: data.hasBeenValid && !valid,
      hasBeenValid: data.hasBeenValid ? true : valid,
    })
  }

  const handleBlur = (e) => {
    const valid = validateEmail(e.target.value)
    setData({
      ...data,
      invalid: !valid,
    })
  }

  const onConsentChange = (e) => {
    const consent = e.target.checked
    setData({
      ...data,
      consent: consent,
    })
  }

  const onFocus = () => {
    setData({
      ...data,
      pristine: false,
    })
  }

  const submitEmail = async () => {
    if (!data.valid || !data.consent) {
      return
    }
    // no-undef disabled because of global variable 'process'
    /* eslint-disable no-undef */
    const response = await fetch(process.env.MAIL_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `SharedAccessSignature ${process.env.MAIL_TOKEN}`,
      },
      body: JSON.stringify({ email: data.email, consent: true }),
    })
    /* eslint-enable no-undef */
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setResponse({ posted: true, error: response.status !== 201 })
    }, 2000)
  }

  const reset = () => {
    setResponse({ posted: false, error: false })
    setLoading(false)
    setData({
      pristine: true,
      valid: false,
      invalid: false,
      email: '',
      consent: false,
      hasBeenValid: false,
    })
  }

  return (
    <div
      className={classnames(styles.base, { [styles.posted]: response.posted })}
    >
      <div className={styles.slider}>
        <div className={styles.beforePosted}>
          <Form>
            <Input
              label={label}
              name="email"
              type="email"
              invalid={data.invalid && !data.pristine}
              invalidText={
                data.email
                  ? "That's not a correct e-mail address!"
                  : 'You must enter something here!'
              }
              valid={data.valid}
              isFlashing={data.pristine}
              attrs={{
                disabled: loading,
                onFocus: onFocus,
                type: 'email',
                onBlur: handleBlur,
                onChange: handleChange,
                value: data.email,
              }}
            />
            {data.hasBeenValid && (
              <div className={styles.consentWrapper}>
                <div style={{ textAlign: 'center' }}>
                  <Checkbox
                    attrs={{
                      onChange: onConsentChange,
                      checked: data.consent,
                      disabled: loading,
                    }}
                  >
                    {consentContent}
                  </Checkbox>
                </div>
                <Space t={3}>
                  <Button
                    loading={loading}
                    onClick={submitEmail}
                    block="small"
                    alignCenter
                    disabled={!data.consent || !data.valid}
                  >
                    {submitLabel}
                  </Button>
                </Space>
              </div>
            )}
          </Form>
        </div>
        <div
          className={classnames(styles.afterPosted, {
            [styles.error]: response.error,
          })}
        >
          <TextContent>
            {response.error ? errorContent : successContent}
            <Button back alignCenter secondary onClick={reset}>
              Sign up again
            </Button>
          </TextContent>
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm
