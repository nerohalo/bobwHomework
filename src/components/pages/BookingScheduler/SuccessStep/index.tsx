import React, { useCallback } from 'react';

import Layout from '../Layout';

import styles from './SuccessStep.module.scss';

const SuccessStep = () => {
  const handleResetFlow = useCallback(() => {
    window.location.href = '/';
  }, []);

  return (
    <Layout>
      <Layout.Header showGoBack={false} title="Success" />
      <Layout.Body>
        <div className={styles.container}>
          <div className={styles.title}>Success!</div>
          <div className={styles.description}>Please follow the instructions sent to your email.</div>
        </div>
      </Layout.Body>
      <Layout.Footer>
        <button
          type="button"
          onClick={handleResetFlow}
          data-testid="button"
        >
          Proceed
        </button>
      </Layout.Footer>
    </Layout>
  );
};

export default SuccessStep;
