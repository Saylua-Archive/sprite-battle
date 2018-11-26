import React, { Component } from 'react';
import SpriteImage from './SpriteImage';
import './Den.css';

class Den extends Component {
  render() {
    return (
      <div
        className="den"
      >
        <h2 className='den-header'>Choose a sprite!</h2>
        {this.props.sprites.map((sprite, i) =>
          <div
            className="den-pet"
            key={ sprite.name }
            onClick={ () => this.props.switchSprite(i) }
          >
            <SpriteImage
              sprite={ sprite }
            />
            { sprite.name } the lv. { sprite.level } { sprite.variant } { sprite.species }
          </div>
        )}
      </div>
    );
  }
}

export default Den;
