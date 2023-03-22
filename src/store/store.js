import { legacy_createStore } from 'redux';

const initialState = {
  countdown: {
    minutes: Math.floor(Math.random() * 5),
    seconds: Math.floor(Math.random() * 59),
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_COUNTDOWN':
      return {
        ...state,
        countdown: action.payload,
      };
    default:
      return state;
  }
}

const store = legacy_createStore(reducer);

export default store;
