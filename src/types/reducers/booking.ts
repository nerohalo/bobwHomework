import { Room } from 'types';

export type BookingReduxProps = {
  rooms: Room[]
  selectedDate: Date | null
  selectedRoomId: number | null
  currentStep: number;
  loading: boolean;
}
