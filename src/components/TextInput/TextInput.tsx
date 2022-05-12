import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Input } from './styles';

const TextInput = () => {
  const [text, setText] = useState('');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const disableTabKey = (event: KeyboardEvent) => {
    if (event.key === 'Tab') event.preventDefault();
  };

  return (
    <Input
      type="text"
      value={text}
      onChange={onChangeInput}
      onKeyDown={disableTabKey}
    />
  );
};

export default TextInput;
