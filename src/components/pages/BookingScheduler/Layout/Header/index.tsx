import classNames from 'classnames';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from 'types';

import * as bookingActions from 'actions/booking';

import styles from './Header.module.scss';

type Props = {
  title: React.ReactText;
  showGoBack?: boolean;
}

const Header = ({ title, showGoBack = true }: Props) => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state: ApplicationState) => state.booking);

  const handleGoToPreviousStep = useCallback(() => {
    dispatch(bookingActions.bookingUpdate({ currentStep: currentStep - 1 }));
  }, [dispatch, currentStep]);

  return (
    <div className={styles.container}>
      {showGoBack && (
        <i
          className={classNames('material-icons-outlined', styles.icon)}
          onClick={handleGoToPreviousStep}
        >
          chevron_left
        </i>
      )}

      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Header;
