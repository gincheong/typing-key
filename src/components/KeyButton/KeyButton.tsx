import { useEffect, useState } from 'react';
import { Container } from './styles';

interface KeyButtonProps {
  keyName: string;
  flex?: number;
}

const KeyButton = (props: KeyButtonProps) => {
  const { keyName, flex } = props;

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const keyDownEventListener = (event: KeyboardEvent) => {
      keyName === event.code && setIsActive(true);
    };
    const keyUpEventListener = (event: KeyboardEvent) => {
      keyName === event.code && setIsActive(false);
    };

    document.addEventListener('keydown', keyDownEventListener);
    document.addEventListener('keyup', keyUpEventListener);

    return () => {
      document.removeEventListener('keydown', keyDownEventListener);
      document.removeEventListener('keyup', keyUpEventListener);
    };
  }, [keyName]);

  return <Container flex={flex} isActive={isActive} />;
};

export default KeyButton;
