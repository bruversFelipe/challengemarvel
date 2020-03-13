/* eslint-disable */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../Store';
import GlobalContextProvider from '../GlobalContext';
import EditHero from '../Containers/EditHero';

const itemHero = {
  id: 1011334,
  name: '3-D Man',
  description: '',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
    extension: 'jpg',
  },
};

test('Teste Submit Form', () => {
  render(
    <Provider store={store()}>
      <GlobalContextProvider>
        <EditHero itemHero={itemHero} />
      </GlobalContextProvider>
    </Provider>
  );

  // disparou um evento
  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: 'Name' },
  });

  expect(screen.queryAllByLabelText(/Name/i)).toBeDefined();

  fireEvent.change(screen.getByLabelText(/Description/i), {
    target: { value: 'Description' },
  });

  expect(screen.queryAllByLabelText(/Description/i)).toBeDefined();

  // disparar evento tem que disparar a api
  //   fireEvent.click(screen.getByText(/submit/i));
});
