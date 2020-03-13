import React, { memo, useState, useCallback } from 'react';

import manopla from './img/manopla.png';
import EasterEggWrapper from './style';

const EasterEgg = memo(() => {
  const [overlay, setOverlay] = useState(false);

  const closeOverlay = useCallback(() => {
    setTimeout(() => {
      setOverlay(false);
    }, 5000);
  }, []);

  const openOverlay = useCallback(() => {
    setOverlay(true);
    closeOverlay();
  }, [closeOverlay]);

  return (
    <EasterEggWrapper overlay={overlay}>
      <div onClick={openOverlay} role="presentation" className="manopla">
        <img src={manopla} alt="manopla" />
      </div>
      <div className="overlay" />
    </EasterEggWrapper>
  );
});

export default EasterEgg;
