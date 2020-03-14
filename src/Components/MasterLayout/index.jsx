import React, { memo } from 'react';
import Header from './Header';
import Card from '../Card';
import Space from '../Space';
import Title from '../Title';
import { useContextGlobal } from '../../GlobalContext';
import EasterEgg from '../EasterEgg';

const MasterLayout = memo(({ children, title }) => {
  const { state: { theme } } = useContextGlobal();

  return (
    <React.Fragment>
      <Header />
      <Space>
        <Title title={title} />
        <Card>
          {children}
        </Card>
      </Space>
      {theme.themeName === 'thanos' && <EasterEgg />}
    </React.Fragment>
  );
});

export default MasterLayout;
