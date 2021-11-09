import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState, DispatchExts } from 'types';

import * as bookingActions from 'actions/booking';

import DateSelectionStep from './DateSelectionStep';
import PaymentStep from './PaymentStep';
import RoomSelectionStep from './RoomSelectionStep';
import SuccessStep from './SuccessStep';

const BookingScheduler = () => {
  const {
    loading,
    currentStep,
  } = useSelector((state: ApplicationState) => state.booking);
  const dispatch = useDispatch<DispatchExts>();

  useEffect(() => {
    if (loading) {
      dispatch(bookingActions.fetchRooms());
    }
  }, [loading, dispatch]);

  return (
    <>
      {currentStep === 0 && (
        <DateSelectionStep />
      )}

      {currentStep === 1 && (
        <RoomSelectionStep/>
      )}

      {currentStep === 2 && (
        <PaymentStep/>
      )}

      {currentStep === 3 && (
        <SuccessStep/>
      )}
    </>
  );
};

export default BookingScheduler;
