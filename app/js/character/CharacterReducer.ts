import { Dispatch, Reducer, ReducerAction, ReducerState, useReducer } from 'react';
import { RankedPerk } from '../perk/Perk';
import { addPerk, removePerk } from '../perk/PerkSpec';
import { SkillType } from '../perk/SkillType';
import { baseCharacter, Character, updateCharacter, updateRace } from './Character';
import { Race, RaceType } from './Race';

export type Action =
  | { type: 'update-skill'; skill: SkillType; value: number }
  | { type: 'change-race'; race: RaceType }
  | { type: 'add-perk'; perk: RankedPerk }
  | { type: 'remove-perk'; perk: RankedPerk };

export const Actions = {
  relevel(name: SkillType, newLevel: number): Action {
    return { type: 'update-skill', skill: name, value: newLevel };
  },
  newRace(race: RaceType): Action {
    return { type: 'change-race', race };
  },
  addPerk(perk: RankedPerk): Action {
    return { type: 'add-perk', perk };
  },
  removePerk(perk: RankedPerk): Action {
    return { type: 'remove-perk', perk };
  }
};

type MyReducer = Reducer<Character, Action>;

function reducer(state: Character, action: Action): Character {
  switch (action.type) {
    case 'update-skill':
      return updateCharacter(state, action.skill, action.value);
    case 'change-race':
      return updateRace(state, action.race);
    case 'add-perk':
      return addPerk(state, action.perk);
    case 'remove-perk':
      return removePerk(state, action.perk);
    default:
      return state;
  }
}

export function useCharacterReducer(): [
  ReducerState<MyReducer>,
  Dispatch<ReducerAction<MyReducer>>
] {
  const [state, dispatch] = useReducer(reducer, baseCharacter(Race.ALTMER));
  return [state, dispatch];
}
