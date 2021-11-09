import { Fixture, BookingReduxProps } from 'types';

import { roomFixture } from 'fixtures';

export const bookingReducerStateFixture: Fixture<BookingReduxProps> = (state = {}) => ({
  rooms: [roomFixture()],
  selectedDate: new Date(),
  selectedRoomId: null,
  currentStep: 0,
  loading: true,
  ...state,
});
