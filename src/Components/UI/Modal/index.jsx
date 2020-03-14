import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ModalWrapper from './style';

const Modal = memo(({ onClose, width, title, children, visible }) => (
  <ModalWrapper width={width} visible={visible}>
    <div className="modal">
      <div className="title">
        <h2>{title}</h2>
        <i className="fas fa-times" onClick={onClose} role="presentation" />
      </div>
      <div className="body">{children}</div>
    </div>
  </ModalWrapper>
));

Modal.propTypes = {
  width: PropTypes.number
};

Modal.defaultProps = {
  width: 500
};

export default Modal;
