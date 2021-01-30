import React, { useState } from 'react'

const Form = ({ dialog }) => {
  const [name, setName] = useState('')

  const onInputChange = (event) => {
    setName(event.target.value)
  }

  const closeDialog = () => {
    dialog.close()
  }

  return (
    <form style={{ width: 300 }}>
      <h1>React with JSX Components</h1>
      <label>
        <span>What is your name?</span>
        <input onChange={(event) => onInputChange(event)} />
      </label>
      <p>{`Hello ${name}`}</p>
      <footer>
        <button type="submit" uxp-variant="cta" onClick={() => closeDialog()}>
          Done
        </button>
      </footer>
    </form>
  )
}

export default Form
