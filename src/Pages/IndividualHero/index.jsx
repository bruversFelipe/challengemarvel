import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import IndividualHeroContainer from '../../Containers/IndividualHero';

const IndividualHero = memo(({ location: { state: { id } } }) => {
  const { dataSource: { data } } = useSelector((newState) => newState);

  const hero = data && data.results.filter((item) => item.id === id)[0];
  return (
    <React.Fragment>
      {hero && (
        <IndividualHeroContainer itemHero={hero} />
      )}
    </React.Fragment>
  );
});

export default IndividualHero;
