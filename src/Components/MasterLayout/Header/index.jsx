import React, { memo, useCallback } from 'react';

import { withRouter } from 'react-router-dom';

import HeaderWrapper from './style';
import DropDown from '../../UI/Dropdown';
import { useContextGlobal } from '../../../GlobalContext';

const menu = [
  {
    title: 'American Captain',
    dataIndex: 'americanCaptain',
  },
  {
    title: 'Hulk',
    dataIndex: 'hulk',
  },
  {
    title: 'Iron Man',
    dataIndex: 'ironMan',
  },
  {
    title: 'Thanos',
    dataIndex: 'thanos',
  },
  {
    title: 'Marvel',
    dataIndex: 'marvel',
  },
];

const Header = memo(({ history }) => {
  const { actions: { saveTheme } } = useContextGlobal();

  const home = useCallback(
    () => {
      history.push('/');
    },
    [history],
  );

  return (
    <HeaderWrapper>
      <div className="logo" onClick={home} role="presentation" />
      <DropDown title={<i className="fas fa-fill-drip" />}>
        {menu.map((item) => (
          <DropDown.Item key={item.dataIndex} onClick={() => saveTheme(item.dataIndex)}>
            {item.title}
          </DropDown.Item>
        ))}
      </DropDown>
    </HeaderWrapper>
  );
});

export default withRouter(Header);
