import React, { memo, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import ModalWrapper from './style';

const Modal = memo(({ onClose, width, title, children, visible }) => {
  const [modal, setModal] = useState(visible);

  useEffect(() => {
    setModal(visible);
  }, [visible]);

  const onCancel = useCallback(() => {
    setModal(false);
    onClose();
  }, [onClose]);

  return (
    <ModalWrapper width={width} visible={modal}>
      <div className="modal">
        <div className="title">
          <h2>{title}</h2>
          <i className="fas fa-times" onClick={onCancel} role="presentation" />
        </div>
        <div className="body">{children}</div>
      </div>
    </ModalWrapper>
  );
});

Modal.propTypes = {
  width: PropTypes.number
};

Modal.defaultProps = {
  width: 500
};

export default Modal;
