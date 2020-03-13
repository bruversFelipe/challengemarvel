import React, { memo } from 'react';
import RowWrapper from './style';

const Row = memo(({ children }) => (
  <RowWrapper>
    {React.Children.map(children, (child) => (
      <React.Fragment key={child}>{child}</React.Fragment>
    ))}
  </RowWrapper>
));

const Col = memo(({ children }) => (
  <div className="col">{children}</div>
));

export { Row, Col };
