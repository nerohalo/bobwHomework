import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  ApplicationState, DispatchExts, ThunkMiddlewareType,
} from 'types';

import serviceProvider from 'services';

export const mockStore = (initialState: ApplicationState): MockStoreEnhanced<ApplicationState, DispatchExts> => {
  const middlewares = [thunk.withExtraArgument(serviceProvider) as ThunkMiddlewareType]; // must be present to test async thunks, should be implemented with service layer
  const mockReduxStore = configureMockStore<ApplicationState, DispatchExts>(middlewares);
  return mockReduxStore(initialState);
};
