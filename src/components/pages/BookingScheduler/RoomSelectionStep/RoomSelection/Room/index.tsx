import classNames from 'classnames';
import React from 'react';

import { Room as RoomType } from 'types';

import styles from './Room.module.scss';

type Props = {
  room: RoomType;
  selected?: boolean;
  onSelect: (id: number) => void;
}

const Room = ({ room, selected, onSelect }: Props) => (
    <div
      className={classNames(styles.container, {
        [styles.unavailable]: !room.available,
        [styles.selected]: selected,
      })}
      onClick={() => (room.available ? onSelect(room.id) : {})}
    >

      <img className={styles.image} src={room.image} alt={`${room.name} room`}/>
      <div className={styles.info}>
        <div className={styles.name}>{room.name}</div>
      </div>
    </div>
);

export default Room;
