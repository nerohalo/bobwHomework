import React, { useCallback } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from 'types';

import * as bookingActions from 'actions/booking';

import Layout from '../Layout';

import styles from './DateSelectionStep.module.scss';

const DateSelectionStep = () => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state: ApplicationState) => state.booking);

  const defaultDates = selectedDate || undefined;

  const handleDateChange = useCallback((date: Date) => {
    dispatch(bookingActions.bookingUpdate({ selectedDate: date }));
  }, [dispatch]);

  const handleStepChange = useCallback(() => {
    dispatch(bookingActions.bookingUpdate({ currentStep: 1 }));
  }, [dispatch]);

  return (
    <Layout>
      <Layout.Header showGoBack={false} title="Select Dates" />
      <Layout.Body>
        <div className={styles.container}>
          <Calendar
            tileDisabled={({ date }) => new Date() > date}
            minDetail="month"
            defaultValue={defaultDates}
            onChange={handleDateChange}
          />
        </div>
      </Layout.Body>
      <Layout.Footer>
        <button
          data-testid="button"
          disabled={!selectedDate}
          onClick={handleStepChange}
        >
          Next
        </button>
      </Layout.Footer>
    </Layout>
  );
};

export default DateSelectionStep;
