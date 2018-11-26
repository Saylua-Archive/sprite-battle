import React from 'react';

export default function StatBar(props) {
  return (
    <div className='stat-bar'>
      <span>{`${props.label}: `}</span>
      <div className='bar-back'>
        <div
          className='bar-value'
          style={{
          width: `${(props.value / props.max) * 100}%`,
          }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
}
