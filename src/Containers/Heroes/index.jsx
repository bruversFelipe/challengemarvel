import React, { memo, useCallback, useState, lazy } from 'react';

import { useSelector } from 'react-redux';

import CardHeroes from '../../Components/CardHeroes';
import { Row, Col } from '../../Components/Grid';

import Loading from '../../Components/Loading';
import Modal from '../../Components/UI/Modal';
import Search from '../Search';

const EditHero = lazy(() => import('../EditHero'));

const initialModal = {
  visible: false,
  itemModal: null,
};

const Heroes = memo(() => {
  const { loading, dataSource: { data } } = useSelector((state) => state);
  const [modal, setModal] = useState(initialModal);

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
    <React.Fragment>
      <Loading loading={loading} />
      <Search />
      <Row>
        {data && data.results.map((item) => (
          <Col key={item.id}>
            <CardHeroes
              id={item.id}
              name={item.name}
              description={item.description}
              thumbnail={item.thumbnail}
              series={item.series}
              onEdit={openModal}
            />
          </Col>
        ))}
      </Row>
      {modal.itemModal && renderModal()}
    </React.Fragment>
  );
});

export default Heroes;
