import { SPRITELIST } from './spriteList';
import { randomChoice, capitalizeFirst } from './utils';
import soulName from './name/soulName';
import { MOVESLIST } from './movesList';

export function randomSprite() {
  const species = randomChoice(Object.keys(SPRITELIST));
  const variant = randomChoice(SPRITELIST[species]);
  const sprite = {
    name: capitalizeFirst(soulName()),
    species: species,
    variant: variant,
    hp: 100,
    maxhp: 100,
    level: 1,
    moves: [MOVESLIST[0]],
  }
  return sprite;
}
