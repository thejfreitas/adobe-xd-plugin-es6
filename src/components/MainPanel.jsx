import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Form from '../components/Form.jsx'

const MainPanel = () => {
  const [dialog, setDialog] = useState(null)

  useEffect(() => {
    if (!dialog) {
      setDialog(document.createElement('dialog'))
    }
  }, [])

  const openDialog = () => {
    ReactDOM.render(<Form dialog={dialog} />, dialog)
    document.body.appendChild(dialog).showModal()
  }

  return (
    <>
      <p>Main Panel</p>
      <sp-button onClick={() => openDialog()}>Open the dialog</sp-button>
    </>
  )
}

export default MainPanel
