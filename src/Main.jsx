import React from 'react'
import ReactDOM from 'react-dom'
import MainPanel from './components/MainPanel.jsx'

let panel
function loadPanel() {
  if (panel == null) {
    panel = document.createElement('panel')
  }

  return panel
}

function renderPanel(panel) {
  ReactDOM.render(<MainPanel />, panel)
}

function show(event) {
  event.node.appendChild(loadPanel())

  renderPanel(panel)
}

function update() {
  renderPanel(panel)
}

function hide(event) {
  event.node.firstChild.remove()
}

export const panels = {
  showPanel: { show, update, hide },
}
