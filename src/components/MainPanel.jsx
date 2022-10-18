import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Form from '../components/Form.jsx';

const MainPanel = () => {
  const [dialog, setDialog] = useState(null);
  const [root, setRoot] = useState(null);

  useEffect(() => {
    if (!dialog) {
      const innerDialog = document.createElement('dialog');
      setRoot(createRoot(innerDialog));
      setDialog(innerDialog);
    }
  }, []);

  const openDialog = (root) => {
    root.render(<Form dialog={dialog} />);
    document.body.appendChild(dialog).showModal();
  };

  return (
    <>
      <sp-heading size="M">Main Panel</sp-heading>
      <sp-body size="S">This is the panel's content.</sp-body>
      {root && <sp-button onClick={() => openDialog(root)}>Open the dialog</sp-button>}
    </>
  );
};

export default MainPanel;
