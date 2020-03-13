import React, { memo, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import Form from '../../Components/Form';
import Footer from '../../Components/Footer';
import Input from '../../Components/UI/Input';
import Button from '../../Components/UI/Button';

import { actionsCreators } from '../../Redux';

const { actionUpdateValues } = actionsCreators();

const EditHero = memo(({ onClose, itemHero: { id, name, description, series, thumbnail } }) => {
  const dispatch = useDispatch();

  const submitValues = useCallback((values) => {
    dispatch(actionUpdateValues({ id, series, thumbnail, ...values }));
    if (onClose) onClose();
  }, [dispatch, id, series, thumbnail, onClose]);
  return (
    <Form onSubmit={submitValues}>
      <Form.Item label="Name" name="name" initialValue={name} required>
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description" initialValue={description}>
        <Input />
      </Form.Item>
      <Footer>
        <Button type="reset">Cancelar</Button>
        <Button typeColor="primary" type="submit">Confirmar</Button>
      </Footer>
    </Form>
  );
});

export default EditHero;
