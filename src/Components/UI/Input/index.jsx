import React, { memo } from 'react';
import InputWpapper from './style';

const Input = memo(({ ...props }) => <InputWpapper {...props} />);

export default Input;
