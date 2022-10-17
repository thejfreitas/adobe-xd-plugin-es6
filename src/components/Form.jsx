import React, { useState } from 'react';

const Form = ({ dialog }) => {
  const [name, setName] = useState('');

  const onInputChange = (event) => {
    setName(event.target.value);
  };

  const closeDialog = () => {
    dialog.close();
  };

  return (
    <form>
      <header>
        <sp-heading size="M">React with JSX Components</sp-heading>
      </header>
      <sp-label>Tell me your name</sp-label>
      <sp-body size="M">
        <input onChange={(event) => onInputChange(event)} />
      </sp-body>
      <sp-body size="M">{`Hello ${name}`}</sp-body>
      <footer>
        <sp-button onClick={() => closeDialog()}>Done</sp-button>
      </footer>
    </form>
  );
};

export default Form;
