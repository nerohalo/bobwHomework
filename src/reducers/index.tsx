import { combineReducers } from 'redux';

import { ApplicationState } from 'types';

import booking from './booking';

const mainReducer = combineReducers<ApplicationState>({
  booking,
});

export default mainReducer;
