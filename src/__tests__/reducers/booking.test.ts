import { ActionType } from 'typesafe-actions';

import { BookingReduxProps } from 'types';

import c from 'helpers/constants';

import * as bookingActions from 'actions/booking';
import { roomFixture } from 'fixtures';
import reducer, { defaultState } from 'reducers/booking';

describe('Test companies reducer', () => {
  it('Should return the default state', () => {
    expect(reducer(undefined, {} as ActionType<typeof bookingActions>)).toEqual(defaultState);
  });

  it('Test BOOKING_SET action', () => {
    const rooms = [roomFixture(), roomFixture({ id: 2 })];

    expect(
      reducer(defaultState, {
        type: c.ACTION_TYPES.BOOKING_SET,
        payload: rooms,
      }),
    ).toEqual({
      rooms,
      selectedRoomId: null,
      selectedDate: null,
      currentStep: 0,
      loading: false,
    } as BookingReduxProps);
  });

  it('Test BOOKING_UPDATE action', () => {
    const payload: Partial<BookingReduxProps> = {
      loading: false,
      currentStep: 1,
    };

    expect(
      reducer(defaultState, {
        type: c.ACTION_TYPES.BOOKING_UPDATE,
        payload,
      }),
    ).toEqual({
      rooms: [],
      selectedDate: null,
      selectedRoomId: null,
      currentStep: 1,
      loading: false,
    } as BookingReduxProps);
  });
});
