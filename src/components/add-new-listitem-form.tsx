import React, { ReactElement, useState } from 'react';

export default function AddNewListItemForm({ onInputSubmit }): ReactElement | null {
  const [value, setValue] = useState<string>('');

  const inputChangeHandler = (event) => setValue(event.target.value);
  const buttonClickHandler = () => {
    onInputSubmit(value);
    setValue('');
  };

  return (
    <div className="new-item-form">
      <input value={value} onChange={inputChangeHandler} />
      <button onClick={buttonClickHandler}>Add item</button>
    </div>
  );
}
