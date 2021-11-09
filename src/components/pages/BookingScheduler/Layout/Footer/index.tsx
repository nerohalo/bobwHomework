import React from 'react';

import styles from './Footer.module.scss';

type Props = {
  children: React.ReactNode
}

const Footer = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
);

export default Footer;
