import React from 'react';

export default function StatBar(props) {
  return (
    <div className='bar-back'>
      <div
        className='bar-value'
        style={{
          width: `${(props.value / props.max) * 100}%`,
        }}
      >
        {`${props.label}: ${props.value}`}
      </div>
    </div>
  );
}
