import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TooltipWrapper from './style';

const Tooltip = memo(({ title, children }) => (
  <TooltipWrapper>
    <div className="title">{title}</div>
    {children}
  </TooltipWrapper>
));

Tooltip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  title: '',
};

export default Tooltip;
