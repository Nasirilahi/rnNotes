import { ADD_NOTES, UPDATE_NOTE, DELETE_NOTE } from '../constants/actionsConstants';


export const addNote = (newNote) =>({ 
    type: ADD_NOTES, newNote
});

export const updateNote = (updatedNote) => ({
    type: UPDATE_NOTE,
    updatedNote
  });


export const deleteNote = (noteId) => ({
    type: DELETE_NOTE,
     noteId
});  