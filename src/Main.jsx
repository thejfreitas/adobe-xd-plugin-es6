import React from 'react'
import { createRoot } from 'react-dom/client'
import MainPanel from './components/MainPanel.jsx'

let panel
let root
function loadPanel() {
  if (panel == null) {
    panel = document.createElement('panel')
    root = createRoot(panel)
  }

  return panel
}

function renderPanel(panel) {
  if (root) {
    root.render(<MainPanel />)
  }
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
