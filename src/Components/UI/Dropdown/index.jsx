import React, { memo } from 'react';
import DropdownWrapper from './style';

const Dropdown = memo(({ title, children }) => (
  <DropdownWrapper>
    <div className="title-drop">{title}</div>
    <ul className="items-drop">
      {React.Children.map(children, (child) => (
        <React.Fragment key={child}>{child}</React.Fragment>
      ))}
    </ul>
  </DropdownWrapper>
));

const DropdownItem = ({ children, onClick }) => (
  <li onClick={onClick} role="presentation">
    {children}
  </li>
);

Dropdown.Item = DropdownItem;

export default Dropdown;
