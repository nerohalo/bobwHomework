import * as bookingActions from 'actions/booking';
import { roomFixture, rootReducerStateFixture } from 'fixtures';
import { mockStore } from 'mocks';

describe('Test booking actions', () => {
  it('Test fetchBooking thunk', () => {
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

    const store = mockStore(rootReducerStateFixture({
      booking: {
        rooms: [],
        selectedDate: null,
        selectedRoomId: null,
        currentStep: 0,
        loading: true,
      },
    }));

    /*
      NOTE: We should mock the service level here,
      but since we are not using external api im testing if it returns the same data that i defined in the thunk.
    */

    store.dispatch(bookingActions.fetchRooms()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(bookingActions.bookingSet(rooms));
    });
  });
});
