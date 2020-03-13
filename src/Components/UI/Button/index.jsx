import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ButtonWrapper from './style';

const Button = memo(({ typeColor, animation, children, ...props }) => (
  <ButtonWrapper animation={animation} typecolor={typeColor} {...props}>
    {children}
  </ButtonWrapper>
));

Button.propTypes = {
  typeColor: PropTypes.oneOf(['default', 'primary', 'danger']),
  animation: PropTypes.bool,
};

Button.defaultProps = {
  typeColor: 'default',
  animation: false,
};

export default Button;
