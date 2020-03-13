import React, { memo, useCallback, lazy, useState } from 'react';

import { withRouter } from 'react-router-dom';

import IndividualHeroContainerWrapper from './style';
import Tooltip from '../../Components/UI/Tooltip';
import Modal from '../../Components/UI/Modal';
import Loading from '../../Components/Loading';

const EditHero = lazy(() => import('../EditHero'));

const initialModal = {
  visible: false,
  itemModal: null,
};

const IndividualHeroContainer = memo(({ itemHero, history }) => {
  const [modal, setModal] = useState(initialModal);

  const back = useCallback(
    () => {
      history.push('/heroes');
    },
    [history],
  );

  const openModal = useCallback(
    (itemModal) => {
      setModal({ visible: true, itemModal });
    },
    [],
  );

  const closeModal = useCallback(
    () => {
      setModal(initialModal);
    },
    [],
  );

  const renderModal = () => {
    const { itemModal, visible } = modal;
    return (
      <Modal title="Edit Hero" visible={visible} width={500} onClose={closeModal}>
        <React.Suspense fallback={<Loading loading />}>
          <EditHero itemHero={itemModal} onClose={closeModal} />
        </React.Suspense>
      </Modal>
    );
  };

  return (
    <IndividualHeroContainerWrapper>
      <div className="header">
        <Tooltip title="Voltar">
          <i className="fas fa-arrow-left" onClick={back} role="presentation" />
        </Tooltip>
        <h2>{itemHero.name}</h2>
        <Tooltip title="Editar">
          <i className="far fa-edit" onClick={() => openModal(itemHero)} role="presentation" />
        </Tooltip>
      </div>
      <div className="content">
        <img src={`${itemHero.thumbnail.path}.${itemHero.thumbnail.extension}`} alt={itemHero.name} />
        <div className="series">
          {itemHero.description !== '' && (
            <div className="description">
              <h3>Description</h3>
              <p>{itemHero.description}</p>
            </div>
          )}
          <h3>Series</h3>
          <ul>
            {itemHero.series.items.map((item) => (
              <li key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {modal.itemModal && renderModal()}
    </IndividualHeroContainerWrapper>
  );
});

export default withRouter(IndividualHeroContainer);
