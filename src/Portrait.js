import React from 'react';
import SpriteImage from './SpriteImage';
import StatBar from './StatBar';

export default function Portrait(props) {
  return (
    <div className={`portrait${props.player ? ' active-portrait' : ' rival-portrait'}`}>
      <StatBar
        label='HP'
        value={props.sprite.hp}
        max={props.sprite.maxhp}
      />
      <SpriteImage sprite={props.sprite} />
    </div>
  )
}
