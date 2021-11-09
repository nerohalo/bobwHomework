import React from 'react';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';

import styles from './Layout.module.scss';

interface LayoutComponent extends React.FC {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
}

const Layout: LayoutComponent = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;

export default Layout;
