
import { combineReducers } from 'redux';
import contactsReducer, * as contactsSlice from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export { contactsSlice, rootReducer };

