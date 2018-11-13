import React, { Component } from 'react';
import SpriteImage from './SpriteImage';
import './Den.css';

class Den extends Component {
  render() {
    return (
      <div
        className="den"
      >
        {this.props.sprites.map((sprite, i) =>
          <div
            className="den-pet"
            key={ sprite.name }
            onClick={ () => this.props.switchSprite(i) }
          >
            <SpriteImage
              sprite={ sprite }
            />
            { sprite.name } the { sprite.variant }
          </div>
        )}
      </div>
    );
  }
}

export default Den;
