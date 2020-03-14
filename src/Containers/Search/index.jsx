import React, { memo, useState, useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { actionsCreators } from '../../Redux';

import Input from '../../Components/UI/Input';
import Button from '../../Components/UI/Button';

import SearchWrapper from './style';

const { actionMarvelHeroesSaga } = actionsCreators();


const Search = memo(() => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onChange = useCallback((evt) => {
    setValue(evt.target.value);
  }, []);

  const getHero = useCallback(() => {
    dispatch(actionMarvelHeroesSaga(value));
  }, [value, dispatch]);

  return (
    <SearchWrapper>
      <Input onChange={onChange} value={value} placeholder="Search by ID" />
      <Button typeColor="primary" onClick={getHero}>Search <i className="fas fa-search" /></Button>
    </SearchWrapper>
  );
});

export default Search;
