import React, { Component } from 'react';
import './App.css';
import { BACKGROUNDLIST } from './backgroundList';
import { randomChoice } from './utils';
import { randomSprite } from './spriteHelper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSprite: randomSprite(),
      opponent: randomSprite(),
      area: randomChoice(BACKGROUNDLIST),
    }
    this.placeholderAttack = this.placeholderAttack.bind(this);
  }

  placeholderAttack() {
    const newOpponent = Object.assign({}, this.state.opponent);
    newOpponent.hp -= 10;
    if (newOpponent.hp <= 0) {
      this.setState({ opponent: randomSprite() });
    } else {
      this.setState({ opponent: newOpponent });
    }
  }

  render() {
    return (
      <div className="App">
        <div
          className="battle"
          style={{
            backgroundImage: `url(/img/backgrounds/${this.state.area}.jpg)`,
          }}
        >
        <div className="sprite-battle-area">
          <Portrait sprite={ this.state.activeSprite } />
          <Portrait sprite={ this.state.opponent } />
        </div>
        <div className="moves">
          <div className="sprite-moves">
            <button onClick={ this.placeholderAttack }>Flail</button>
            <button onClick={ this.placeholderAttack }>Slam</button>
            <button onClick={ this.placeholderAttack }>Bap</button>
            <button onClick={ this.placeholderAttack }>Punch</button>
          </div>
          <div className="player-moves">
            <button>Catch</button>
            <button>Flee</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

function Portrait(props) {
  return (
    <div className="portrait">
    <img
        src={`/img/sprites/${props.sprite.species}/${props.sprite.variant}.png`}
        alt={`${props.sprite.name} the ${props.sprite.variant} ${props.sprite.species}`}
        title={`${props.sprite.name} the ${props.sprite.variant} ${props.sprite.species}`}
      />
    <div>HP: {props.sprite.hp}</div>
    </div>
  )
}

export default App;
