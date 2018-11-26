import React from 'react';
import SpriteImage from './SpriteImage';
import StatBar from './StatBar';

export default function Portrait(props) {
  return (
    <div className={`portrait${props.player ? ' active-portrait' : ' rival-portrait'}`}>
      <div className='nameplate'>
        { props.sprite.name } the lv. { props.sprite.level } { props.sprite.variant } { props.sprite.species }
        <StatBar
          label='HP'
          value={props.sprite.hp}
          max={props.sprite.maxhp}
        />
      </div>
      <SpriteImage sprite={props.sprite} />
    </div>
  )
}
