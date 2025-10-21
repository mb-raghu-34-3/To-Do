import {thunk} from 'redux-thunk'; 
import rootReducer from './reducers';
import { legacy_createStore as createStore, applyMiddleware} from 'redux'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};


const store = createStore(
  rootReducer,
  loadState(),
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState());
});


export default store;
