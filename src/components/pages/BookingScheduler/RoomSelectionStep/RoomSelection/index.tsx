import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Room as RoomType } from 'types';

import * as bookingActions from 'actions/booking';

import Room from './Room';

import styles from './RoomSelection.module.scss';

type Props = {
  rooms: RoomType[],
  selectedRoomId: number | null;
}

const RoomSelection = ({ rooms, selectedRoomId }: Props) => {
  const dispatch = useDispatch();

  const handleRoomSelect = useCallback((roomId: number) => {
    dispatch(bookingActions.bookingUpdate({ selectedRoomId: roomId }));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {rooms.map((room) => (
        <Room
          key={room.id}
          room={room}
          selected={selectedRoomId === room.id}
          onSelect={handleRoomSelect}
        />
      ))}
    </div>
  );
};

export default RoomSelection;
