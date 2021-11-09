import { Room, Fixture } from 'types';

export const roomFixture: Fixture<Room> = (state = {}) => ({
  id: 1,
  name: 'Cheap room',
  available: true,
  image: 'https://via.placeholder.com/400x200.png?text=Cheap%20room',
  ...state,
});
