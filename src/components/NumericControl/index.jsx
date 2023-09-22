import React, {useState} from 'react';
import classnames from 'classnames';


const NumericControl = ({value, setValue, increment, message, min, max}) => {
  const [pushedButton, setPushedButton] = useState(null);
  const conditionMax = max ? value + increment <= max : true;
  const conditionMin = min ? value - increment >= min : true;

  return(
    <>
    <span
      className={classnames('PushButton', {
        ActivePushButton: pushedButton == 'up'
      })}
      onMouseDown={() => {
        setPushedButton('up')
      }}
      onMouseUp={() => {
        setPushedButton()
      }}
      onClick={() => conditionMin && setValue(value - increment)}
 
>
  <img src={'https://raw.githubusercontent.com/borzecki/react-synth/5b827157dbc664ca56cab3b89be6b53f6e58d11e/src/static/minus.svg'} alt='minus' />
</span>
<span 
 aria-label={message}
 data-balloon-pos='up'
 className='OctaveControl'
>{value}
  </span>
  <span
      className={classnames('PushButton', {
        ActivePushButton: pushedButton == 'down'
      })}
      onMouseDown={() => {
        setPushedButton('down')
      }}
      onMouseUp={() => {
        setPushedButton()
      }}
      onClick={() => conditionMax && setValue(value + increment)}
 
>
  <img src={'https://raw.githubusercontent.com/borzecki/react-synth/5b827157dbc664ca56cab3b89be6b53f6e58d11e/src/static/plus.svg'} alt='plus' />
</span>
    </>
  )
}

export default NumericControl;