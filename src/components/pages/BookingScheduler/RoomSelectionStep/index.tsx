import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from 'types';

import * as bookingActions from 'actions/booking';
import Layout from 'components/pages/BookingScheduler/Layout';

import RoomSelection from './RoomSelection';

const RoomSelectionStep = () => {
  const dispatch = useDispatch();
  const { rooms, selectedRoomId } = useSelector((state: ApplicationState) => state.booking);

  const handleStepChange = useCallback(() => {
    dispatch(bookingActions.bookingUpdate({ currentStep: 2 }));
  }, [dispatch]);

  return (
    <Layout>
      <Layout.Header title="Select room" />
      <Layout.Body>
        <RoomSelection rooms={rooms} selectedRoomId={selectedRoomId} />
      </Layout.Body>
      <Layout.Footer>
        <button
          onClick={handleStepChange}
          disabled={!selectedRoomId}
        >
          Next
        </button>
      </Layout.Footer>
    </Layout>
  );
};

export default RoomSelectionStep;
