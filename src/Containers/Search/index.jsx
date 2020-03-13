import React, { memo, useState, useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { actionsCreators } from '../../Redux';

import Input from '../../Components/UI/Input';
import Button from '../../Components/UI/Button';

const { actionMarvelHeroesSaga } = actionsCreators();

const style = {
  row: { display: 'flex', alignItems: 'center', padding: '20px 8px' },
  input: { flex: 1, marginRight: '10px' }
};

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
    <div style={style.row}>
      <Input onChange={onChange} value={value} style={style.input} placeholder="Search by ID" />
      <Button typeColor="primary" onClick={getHero}>Search <i className="fas fa-search" /></Button>
    </div>
  );
});

export default Search;
