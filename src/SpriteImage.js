import React from 'react';

export default function SpriteImage(props) {
  return (
    <img
      src={`/img/sprites/${props.sprite.species}/${props.sprite.variant}.png`}
      alt={`${props.sprite.name} the ${props.sprite.variant} ${props.sprite.species}`}
      title={`${props.sprite.name} the ${props.sprite.variant} ${props.sprite.species}`}
    />
  );
}
