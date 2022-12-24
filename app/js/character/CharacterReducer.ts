import { Dispatch, Reducer, ReducerAction, ReducerState, useReducer } from 'react';
import { baseCharacter, Character } from './Character';

type Action = Record<string, never>;

type MyReducer = Reducer<Character, Action>;

function reducer(state: Character, action: Action): Character {
    return state;
}

export default function useCharacterReducer(): [
    ReducerState<MyReducer>,
    Dispatch<ReducerAction<MyReducer>>
] {
    const [state, dispatch] = useReducer(reducer, baseCharacter());
    return [state, dispatch];
}
