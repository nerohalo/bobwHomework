import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ThunkMiddlewareType } from 'types';

import mainReducer from 'reducers';
import serviceProvider from 'services';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk.withExtraArgument(serviceProvider) as ThunkMiddlewareType));

const store = createStore(mainReducer, composedEnhancer);

export default store;
