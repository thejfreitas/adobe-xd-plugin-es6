import React from 'react'
import ReactDOM from 'react-dom'
import MainPanel from './components/MainPanel.jsx'

let panel
function loadPanel() {
  if (panel == null) {
    panel = document.createElement('panel')
    ReactDOM.render(<MainPanel />, panel)
  }

  return panel
}

function show(event) {
  event.node.appendChild(loadPanel())
}

function hide(event) {
  event.node.firstChild.remove()
}

function update() {
  ReactDOM.render(<MainPanel />, panel)
}

export const panels = {
  showPanel: { show, hide, update },
}
