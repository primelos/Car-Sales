export const ADD_ITEM = 'NEW_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const addItem = id => ({ type: ADD_ITEM, payload:id})
export const removeItem = id =>({type: REMOVE_ITEM, payload: id})