import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SpaceWrapper from './style';

const Space = memo(({ children, margin, padding }) => (
  <SpaceWrapper margin={margin} padding={padding}>
    {children}
  </SpaceWrapper>
));

Space.propTypes = {
  margin: PropTypes.string,
  padding: PropTypes.string,
};

Space.defaultProps = {
  margin: '0',
  padding: '24px',
};

export default Space;
