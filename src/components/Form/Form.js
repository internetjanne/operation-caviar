import React from 'react'

const Form = ({ children, onSubmit }) => (
  <form
    noValidate
    onSubmit={(e) => {
      e.preventDefault()
      if (onSubmit) {
        onSubmit()
      }
    }}
  >
    {children}
  </form>
)

export default Form
