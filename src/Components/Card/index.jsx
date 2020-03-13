import React, { memo } from 'react';
import CardWrapper from './style';

const Card = memo(({ children }) => (
  <CardWrapper>
    {children}
  </CardWrapper>
));

export default Card;
