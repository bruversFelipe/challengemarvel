import React, { memo, useCallback } from 'react';

import { withRouter } from 'react-router-dom';

import Button from '../../Components/UI/Button';
import Space from '../../Components/Space';

const Home = memo(({ history }) => {
  const start = useCallback(
    () => {
      history.push('/heroes');
    },
    [history],
  );

  return (
    <React.Fragment>
      <p>Olá, seja <strong>bem vindo</strong> ao Marvel Heroes.</p>
      <p>Aqui você poderá consultar os heróis da marvel, verificar suas características e também editá-los</p>
      <p>No canto superior direito, se divirta com os temas dos heróis <strong>favoritos</strong>.</p>
      <Space padding="10px" />
      <Button onClick={start} animation typeColor="primary">Vamos começar</Button>
    </React.Fragment>
  );
});

export default withRouter(Home);
