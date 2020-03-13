import React, { memo } from 'react';
import FooterWrapper from './style';

const Footer = memo(({ children }) => (
  <FooterWrapper>{children}</FooterWrapper>
));

export default Footer;
