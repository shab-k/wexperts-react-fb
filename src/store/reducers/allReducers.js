import blogReducer from './blogReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const allReducers = combineReducers({
  blogs: blogReducer,
  firestore: firestoreReducer,
});

export default allReducers;
