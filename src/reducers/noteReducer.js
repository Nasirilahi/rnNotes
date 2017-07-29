import _ from 'lodash';
import { ADD_NOTES, UPDATE_NOTE, DELETE_NOTE } from '../constants/actionsConstants';

const initialState = [
]

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOTES:
      const newNote = { ...action.newNote, id: state.length };
      const newState = [newNote, ...state];
      return newState

    case UPDATE_NOTE:
      const objectTORemove = state.filter((item) => item.id === action.updatedNote.id);
      const newArray = _.remove(state, (data) => {
        return data.id != action.updatedNote.id
      });
      const updatedNote = {...action.updatedNote, id: objectTORemove[0].id, createdAt: objectTORemove[0].createdAt };
      const updatedState = [updatedNote, ...newArray];
      return updatedState;
      return state;

    case DELETE_NOTE:
      const deletedNewArray = _.remove(state, (data) => {
        return data.id != action.noteId
      });
      return deletedNewArray;

    default:
      return state
  }
}
