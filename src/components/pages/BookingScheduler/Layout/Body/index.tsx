import React from 'react';

import styles from './Body.module.scss';

type Props = {
  children: React.ReactNode
}

const Body = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
);

export default Body;
