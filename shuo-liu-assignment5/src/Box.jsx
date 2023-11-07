
import React from 'react';

export default function Box(props) {
  const boxClass = props.isBlack ? 'box fillBackground' : 'box';

  return (
    <div
      className={boxClass}
      onClick={props.onClick} >
    </div>
  );
}