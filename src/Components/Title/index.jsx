import React, { memo } from 'react';
import TitleWrapper from './style';

const Title = memo(({ title }) => <TitleWrapper><span>{title}</span></TitleWrapper>);

export default Title;
