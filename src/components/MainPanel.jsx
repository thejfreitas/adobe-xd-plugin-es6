import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form.jsx';

const MainPanel = () => {
  const [dialog, setDialog] = useState(null);

  useEffect(() => {
    if (!dialog) {
      setDialog(document.createElement('dialog'));
    }

    return () => {
      setDialog(null);
      document.removeChild('dialog');
    };
  }, []);

  const openDialog = () => {
    ReactDOM.render(<Form dialog={dialog} />, dialog);
    document.body.appendChild(dialog).showModal();
  };

  return (
    <>
      <sp-heading size="M">Main Panel</sp-heading>
      <sp-body size="S">This is the panel's content.</sp-body>
      <sp-button onClick={() => openDialog()}>Open the dialog</sp-button>
    </>
  );
};

export default MainPanel;
