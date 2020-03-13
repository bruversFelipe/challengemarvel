/* eslint-disable */
import React, { memo, useState, useCallback, useEffect } from 'react';
import FormItemWrapper from './style';

const style = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const formFieldInitial = (child) => ({
  value: child.props.initialValue || '',
  error: false,
  rules: {
    required: child.props.required,
    message: child.props.message
  }
});

const Form = memo(({ children, onSubmit, ...props }) => {
  const [formFields, setFormFields] = useState({});

  const getConfigsChilds = useCallback(() => {
    children.map((child) => {
      if (child.type !== 'button' && child.props.name) {
        setFormFields((prevState) => ({
          ...prevState,
          [child.props.name]: formFieldInitial(child)
        }));
      }

      return null;
    });
  }, [children]);

  useEffect(() => {
    getConfigsChilds();
  }, [getConfigsChilds]);

  const onChangeFields = useCallback((evt) => {
    const { id, value } = evt.target;

    setFormFields((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        value,
        error: false
      }
    }));
  }, []);

  const submit = useCallback(
    (evt) => {
      evt.preventDefault();
      let itemField = {};
      Object.keys(formFields).map(index => {
        if (
          formFields[index].value === '' &&
          formFields[index].rules.required
        ) {
          itemField = {
            ...itemField,
            [index]: {
              ...formFields[index],
              error: true
            }
          };
        }
      });

      if (Object.keys(itemField).length > 0) {
        return setFormFields((prevState) => ({ ...prevState, ...itemField }));
      }

      if (onSubmit) {
        let newValues = {};
        Object.keys(formFields).map(index => {
          newValues = { ...newValues, [index]: formFields[index].value };
        });
        onSubmit(newValues);
      }
    },
    [onSubmit, formFields]
  );

  const clear = useCallback(
    (evt) => {
      evt.preventDefault();
      getConfigsChilds();
    },
    [getConfigsChilds]
  );

  return (
    <form onSubmit={submit} onReset={clear} {...props} style={style.form}>
      {React.Children.map(children, (child) => {
        const field = formFields[child.props.name];

        let restProps = {};

        if (child.type !== 'button' && child.props.name) {
          restProps = { onChangeFields, field };
        }

        return React.cloneElement(child, restProps);
      })}
    </form>
  );
});

function getRequired(field) {
  if (field && field.error && field.rules.required) {
    return true;
  }
  return false;
}

const FormItem = memo(({ children, name, label, ...rest }) => {
  const { onChangeFields, field } = rest;

  return (
    <FormItemWrapper>
      <label htmlFor={name}>
        {label}{' '}
        {field && field.rules && !field.rules.required && (
          <span>(optional)</span>
        )}
      </label>
      {React.cloneElement(children, {
        id: name,
        onChange: onChangeFields,
        value: field ? field.value : '',
        className: getRequired(field) ? 'required' : ''
      })}
      {getRequired(field) && (
        <span className="message">{field.rules.message}</span>
      )}
    </FormItemWrapper>
  );
});

Form.Item = FormItem;

export default Form;
