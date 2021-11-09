import { ActionType, createReducer } from 'typesafe-actions';

import { BookingReduxProps } from 'types';

import * as bookingActions from 'actions/booking';

export const defaultState: BookingReduxProps = {
  rooms: [],
  selectedDate: null,
  selectedRoomId: null,
  currentStep: 0,
  loading: true,
};

export const reducer = createReducer<BookingReduxProps, ActionType<typeof bookingActions>>(defaultState)
  .handleAction(bookingActions.bookingSet, (state, action) => ({
    ...state,
    rooms: action.payload,
    loading: false,
  }))
  .handleAction(bookingActions.bookingUpdate, (state, action) => ({
    ...state,
    ...action.payload,
  }));

export default reducer;
