import { createAction } from 'typesafe-actions';

import {
  ThunkResult,
  Room,
  BookingReduxProps,
} from 'types';

import c from 'helpers/constants';

import { roomFixture } from 'fixtures';

export const bookingSet = createAction(c.ACTION_TYPES.BOOKING_SET)<Room[]>();
export const bookingUpdate = createAction(c.ACTION_TYPES.BOOKING_UPDATE)<Partial<BookingReduxProps>>();

export const fetchRooms = (): ThunkResult<Promise<void>> => async (
  dispatch,
): Promise<void> => {
  const rooms = [
    roomFixture(),
    roomFixture({
      id: 2,
      name: 'Not so cheap',
      available: false,
      image: 'https://via.placeholder.com/400x200.png?text=Not%20so%20cheap%20room',
    }),
    roomFixture({
      id: 3,
      name: 'Expensive',
      available: true,
      image: 'https://via.placeholder.com/400x200.png?text=Expensive%20room',
    }),
  ];

  dispatch(bookingSet(rooms));
};
