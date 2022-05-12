import KeyButton from 'components/KeyButton/KeyButton';
import { KeyRow } from './styles';

const Keyboard = () => {
  return (
    <div>
      <KeyRow>
        <KeyButton keyName={'Escape'} />
        <KeyButton keyName={'Digit1'} />
        <KeyButton keyName={'Digit1'} />
        <KeyButton keyName={'Digit2'} />
        <KeyButton keyName={'Digit3'} />
        <KeyButton keyName={'Digit4'} />
        <KeyButton keyName={'Digit5'} />
        <KeyButton keyName={'Digit6'} />
        <KeyButton keyName={'Digit7'} />
        <KeyButton keyName={'Digit8'} />
        <KeyButton keyName={'Digit9'} />
        <KeyButton keyName={'Digit10'} />
        <KeyButton keyName={'Digit11'} />
        <KeyButton keyName={'Digit12'} />
        <KeyButton keyName={'Backspace'} flex={2} />
      </KeyRow>
      <KeyRow>
        <KeyButton keyName={'Tab'} flex={1.5} />
        <KeyButton keyName={'KeyQ'} />
        <KeyButton keyName={'KeyW'} />
        <KeyButton keyName={'KeyE'} />
        <KeyButton keyName={'KeyR'} />
        <KeyButton keyName={'KeyT'} />
        <KeyButton keyName={'KeyY'} />
        <KeyButton keyName={'KeyU'} />
        <KeyButton keyName={'KeyI'} />
        <KeyButton keyName={'KeyO'} />
        <KeyButton keyName={'KeyP'} />
        <KeyButton keyName={'BracketLeft'} />
        <KeyButton keyName={'BracketRight'} />
        <KeyButton keyName={'backSlash'} flex={1.5} />
      </KeyRow>
      <KeyRow>
        <KeyButton keyName={'CapsLock'} flex={1.75} />
        <KeyButton keyName={'KeyA'} />
        <KeyButton keyName={'KeyS'} />
        <KeyButton keyName={'KeyD'} />
        <KeyButton keyName={'KeyF'} />
        <KeyButton keyName={'KeyG'} />
        <KeyButton keyName={'KeyH'} />
        <KeyButton keyName={'KeyJ'} />
        <KeyButton keyName={'KeyK'} />
        <KeyButton keyName={'KeyL'} />
        <KeyButton keyName={'Semicolon'} />
        <KeyButton keyName={'Quote'} />
        <KeyButton keyName={'Enter'} flex={2.25} />
      </KeyRow>
      <KeyRow>
        <KeyButton keyName={'LeftShift'} flex={2.25} />
        <KeyButton keyName={'KeyZ'} />
        <KeyButton keyName={'KeyX'} />
        <KeyButton keyName={'KeyC'} />
        <KeyButton keyName={'KeyV'} />
        <KeyButton keyName={'KeyB'} />
        <KeyButton keyName={'KeyN'} />
        <KeyButton keyName={'KeyM'} />
        <KeyButton keyName={'Comma'} />
        <KeyButton keyName={'Period'} />
        <KeyButton keyName={'Slash'} />
        <KeyButton keyName={'RightShift'} flex={2.75} />
      </KeyRow>
      <KeyRow>
        <KeyButton keyName={'ControlLeft'} flex={1.25} />
        <KeyButton keyName={'MetaLeft'} flex={1.25} />
        <KeyButton keyName={'AltLeft'} flex={1.25} />
        <KeyButton keyName={'Space'} flex={6.25} />
        <KeyButton keyName={'AltRight'} flex={1.25} />
        <KeyButton keyName={'ControlRight'} flex={1.25} />
        <KeyButton keyName={''} flex={1.25} />
        <KeyButton keyName={''} flex={1.25} />
      </KeyRow>
    </div>
  );
};

export default Keyboard;
