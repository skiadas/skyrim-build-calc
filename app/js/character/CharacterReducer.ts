import { Dispatch, Reducer, ReducerAction, ReducerState, useReducer } from 'react';
import { PerkList } from '../perk/PerkList';
import { baseCharacter, Character, updateCharacter, updateRace } from './Character';
import { Race } from './Race';

type Action =
    | { type: 'update-skill'; skill: PerkList; value: number }
    | { type: 'change-race'; race: Race };

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

export default function useCharacterReducer(): [
    ReducerState<MyReducer>,
    Dispatch<ReducerAction<MyReducer>>
] {
    const [state, dispatch] = useReducer(reducer, baseCharacter());
    return [state, dispatch];
}
