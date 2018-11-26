import React, { Component } from 'react';
import Portrait from './Portrait';
import './Battle.css';
import { MOVESLIST } from './helpers/movesList';
import { capitalizeFirst } from './helpers/utils';

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
          <Portrait sprite={ this.props.activeSprite } player={true} />
          {this.props.opponent ? <Portrait sprite={ this.props.opponent } /> : ''}
        </div>
        { this.props.continueTexts.length > 0 ?
          <div className="moves" onClick={ this.props.continue }>
            <button className="continue-text">{ this.props.continueTexts[0] }</button>
          </div>
        :
        <div className="moves">
          <div className="battle-log">Make your move!</div>
          <div className="sprite-moves">
            {MOVESLIST.map(attack =>
              <button onClick={ () => this.props.onAttack(attack) }>
                {capitalizeFirst(attack.name)}
              </button>
            )}
          </div>
          <div className="player-moves">
            <button onClick={ this.props.onCatch }>Catch</button>
            <button onClick={ this.props.onFlee }>Flee</button>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default Battle;
