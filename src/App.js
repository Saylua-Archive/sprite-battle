import React, { Component } from 'react';

import { BACKGROUND_LIST } from './helpers/backgroundList';
import { randomChoice } from './helpers/utils';
import { randomSprite } from './helpers/spriteHelper';
import Battle from './Battle';
import Den from './Den';
import SpriteImage from './SpriteImage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSprite: 0,
      area: randomChoice(BACKGROUND_LIST),
      sprites: [randomSprite()],
      viewingDen: false,
    }
    this.startBattle = this.startBattle.bind(this);
    this.placeholderAttack = this.placeholderAttack.bind(this);
    this.endBattle = this.endBattle.bind(this);
    this.catchOpponent = this.catchOpponent.bind(this);
    this.viewDen = this.viewDen.bind(this);
    this.switchSprite = this.switchSprite.bind(this);
  }

  componentDidMount() {
    this.startBattle();
  }

  startBattle() {
    this.setState({
      opponent: randomSprite(),
    });
  }

  endBattle() {
    this.setState({
      opponent: null,
    });
  }

  catchOpponent() {
    this.setState({
      sprites: this.state.sprites.concat([this.state.opponent]),
      opponent: null,
    });
  }

  placeholderAttack() {
    const newOpponent = Object.assign({}, this.state.opponent);
    newOpponent.hp -= 10;
    if (newOpponent.hp <= 0) {
      this.endBattle();
    } else {
      this.setState({ opponent: newOpponent });
    }
  }

  viewDen() {
    this.setState({
      viewingDen: true,
    });
  }

  switchSprite(i) {
    this.setState({
      viewingDen: false,
      activeSprite: i,
    });
  }

  getActiveSprite() {
    return this.state.sprites[this.state.activeSprite];
  }

  render() {
    return (
      <div className="App" style={{
        backgroundImage: `url(/img/backgrounds/${this.state.area}.jpg)`,
      }}>
        <SpriteImage sprite={this.getActiveSprite()} />
        <button onClick={ this.startBattle }>
          Keep adventuring!
        </button>
        <button onClick={ this.viewDen }>
          Switch sprite
        </button>
        { this.state.viewingDen ?
          <Den
            sprites={ this.state.sprites }
            switchSprite={ this.switchSprite }
          />
        : ''
        }
        { this.state.opponent ?
          <Battle
            area={ this.state.area }
            activeSprite={ this.getActiveSprite() }
            opponent={ this.state.opponent }
            onAttack={ this.placeholderAttack }
            onFlee={ this.endBattle }
            onCatch={ this.catchOpponent }
          /> : ''
        }
      </div>
    );
  }
}

export default App;
