import { combineReducers } from '@reduxjs/toolkit';

import BlogFormPayloadReducer from './modalpayload';

const reducers = combineReducers({
  modalPayload: BlogFormPayloadReducer,
});

export default reducers;
