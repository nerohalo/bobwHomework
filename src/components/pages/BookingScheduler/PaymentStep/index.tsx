import classNames from 'classnames';
import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from 'types';

import c from 'helpers/constants';
import { getCCBrandName, luhnCheck } from 'helpers/payment';

import * as bookingActions from 'actions/booking';
import serviceProvider from 'services';

import Layout from '../Layout';

import styles from './PaymentStep.module.scss';

const PaymentStep = () => {
  const dispatch = useDispatch();
  const { selectedDate, selectedRoomId } = useSelector((state: ApplicationState) => state.booking);
  const [ccNumber, setCcNumber] = useState('');
  const ccBrand = getCCBrandName(ccNumber);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    if (luhnCheck(ccNumber)) {
      /*
        NOTE: this should be a thunk,
        but since I dont have a backend I call the service directly and use finally callback to bybass the error.
       */

      serviceProvider.bookingService.bookRoom(selectedDate as Date, selectedRoomId as number, ccNumber).finally(() => {
        dispatch(bookingActions.bookingUpdate({ currentStep: 3 }));
      });
    }
  };

  return (
    <Layout>
      <Layout.Header title="Payment" />
      <Layout.Body>
        <form id="creditCardForm" onSubmit={submitForm}>
          <div className={styles.container}>
            <div className={styles.inputContainer}>
              <label className={styles.label}>
                Credit card number

                <input
                  className={styles.input}
                  type="text"
                  name="ccNumber"
                  value={ccNumber}
                  onChange={(event) => {
                    if (event.target.value.match(c.REGEX.NUMBER_INPUT)) {
                      const sanitizedValue = event.target.value;
                      setCcNumber(sanitizedValue);
                    }
                  }}
                />

                <div className={classNames(styles.ccBrand, ccBrand ? styles[ccBrand] : '')} />
              </label>
            </div>
          </div>
        </form>
      </Layout.Body>
      <Layout.Footer>
        <button
          form="creditCardForm"
          type="submit"
          disabled={ccBrand === null}
        >
          Next
        </button>
      </Layout.Footer>
    </Layout>
  );
};

export default PaymentStep;
