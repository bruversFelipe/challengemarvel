import React, { memo, useContext, useMemo, useCallback, useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import marvel from './Themes/marvel';
import americanCaptain from './Themes/americanCaptain';
import hulk from './Themes/hulk';
import ironMan from './Themes/ironMan';
import thanos from './Themes/thanos';

import { actionsCreators } from './Redux';
import { sessionSet, sessionGet } from './Utils/Session';

const { actionMarvelHeroesSaga } = actionsCreators();

const GlobalContext = React.createContext();

const themes = {
  americanCaptain,
  hulk,
  ironMan,
  marvel,
  thanos,
};

const GlobalContextProvider = memo(({ children }) => {
  const dispatch = useDispatch();
  const { dataSource: { data } } = useSelector((state) => state);

  const [theme, setTheme] = useState(sessionGet('theme') || themes.marvel);

  useEffect(() => {
    if (!data) {
      dispatch(actionMarvelHeroesSaga());
    }
  }, [dispatch, data]);

  const saveTheme = useCallback((itemTheme) => {
    const themeAtual = themes[itemTheme];
    setTheme(themeAtual);
    sessionSet('theme', themeAtual);
  }, []);

  const providerValues = useMemo(() => ({
    state: {
      theme,
    },
    actions: {
      saveTheme,
    }
  }), [theme, saveTheme]);

  return (
    <GlobalContext.Provider value={providerValues}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
});

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useContextGlobal = () => useContext(GlobalContext);

export { useContextGlobal };
export default GlobalContextProvider;
