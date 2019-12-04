import { Action } from '../ngrx-fake/ngrx';

// Implementation of the actions
export const increaserAction: Action = {
    type: 'INCREASE'
}
export const declementerAction: Action = {
    type: 'DECREMENT'
}
export const multiplierAction: Action = {
    type: 'MULTIPLY',
    payload: 7
}
export const dividerAction: Action = {
    type: 'DIVIDE',
    payload: 2
}

export const resetAction: Action = {
    type: 'RESET',
}