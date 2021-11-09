import { Fixture, ApplicationState } from 'types';

import { bookingReducerStateFixture } from './booking';

export const rootReducerStateFixture: Fixture<ApplicationState> = (state = {}) => ({
  booking: bookingReducerStateFixture(),
  ...state,
});

export * from './booking';
