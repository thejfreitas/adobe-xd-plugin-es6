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
    <form>
      <h1>React with JSX Components</h1>
      <label>
        <span>Tell me your name</span>
        <input onChange={(event) => onInputChange(event)} />
      </label>
      <p>{`Hello ${name}`}</p>
      <footer>
        <sp-button onClick={() => closeDialog()}>Done</sp-button>
      </footer>
    </form>
  )
}

export default Form
