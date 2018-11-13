import React, { Component } from 'react';
import SpriteImage from './SpriteImage';
import './Battle.css';

class Battle extends Component {
  render() {
    return (
      <div
        className="battle"
        style={{
          backgroundImage: `url(/img/backgrounds/${this.props.area}.jpg)`,
        }}
      >
      <div className="sprite-battle-area">
        <Portrait sprite={ this.props.activeSprite } />
        <Portrait sprite={ this.props.opponent } />
      </div>
      <div className="moves">
        <div className="sprite-moves">
          <button onClick={ this.props.onAttack }>Flail</button>
          <button onClick={ this.props.onAttack }>Slam</button>
          <button onClick={ this.props.onAttack }>Bap</button>
          <button onClick={ this.props.onAttack }>Punch</button>
        </div>
        <div className="player-moves">
          <button onClick={ this.props.onCatch }>Catch</button>
          <button onClick={ this.props.onFlee }>Flee</button>
        </div>
      </div>
    </div>
    );
  }
}

function Portrait(props) {
  return (
    <div className="portrait">
      <SpriteImage sprite={props.sprite} />
      <div>HP: {props.sprite.hp}</div>
    </div>
  )
}

export default Battle;
