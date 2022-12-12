import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const contactsSlice = createSlice({
 name: 'contacts',

  initialState,
 reducers: {
   addContact: (state, action) => {
     
   },

   addTag: (state, action) => {
    
  },
 },
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;