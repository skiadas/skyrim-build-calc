import { Dispatch, Reducer, ReducerAction, ReducerState, useReducer } from 'react';
import { SkillType } from '../perk/SkillType';
import { baseCharacter, Character, updateCharacter, updateRace } from './Character';
import { Race, RaceType } from './Race';

export type Action =
  | { type: 'update-skill'; skill: SkillType; value: number }
  | { type: 'change-race'; race: RaceType };

export const Actions = {
  relevel(name: SkillType, newLevel: number): Action {
    return { type: 'update-skill', skill: name, value: newLevel };
  },
  newRace(race: RaceType): Action {
    return { type: 'change-race', race };
  }
};

type MyReducer = Reducer<Character, Action>;

function reducer(state: Character, action: Action): Character {
  switch (action.type) {
    case 'update-skill':
      return updateCharacter(state, action.skill, action.value);
    case 'change-race':
      return updateRace(state, action.race);
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
