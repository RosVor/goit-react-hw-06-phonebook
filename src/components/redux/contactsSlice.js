import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      const index = state.contacts.findIndex(contact => contact.id === contactId);
    
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
    },    
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    register: (action) => {
      console.log(action.payload.data.key);
    },
  },
});

export const { addContact, deleteContact, setFilter, register } = contactsSlice.actions;
export default contactsSlice.reducer;