import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CardHeroesWrapper from './style';

const CardHeroes = memo(({ id, name, description, series, thumbnail, onEdit }) => {
  const propsHero = { id, name, description, series, thumbnail };

  const configLink = {
    pathname: '/individual-hero',
    state: { id }
  };
  const img = `${thumbnail.path}.${thumbnail.extension}`;

  const edt = useCallback(() => {
    onEdit(propsHero);
  }, [onEdit, propsHero]);

  return (
    <CardHeroesWrapper url={img}>
      <div className="card-hero">
        <img src={img} alt={name} />
        <div className="hero">
          <h2>{name}</h2>
          <p className="description" title={description}>
            {description}
          </p>
        </div>
        <div className="details"><Link to={configLink}>View More</Link></div>
      </div>
      <div className="edit">
        <i className="far fa-edit" onClick={edt} role="presentation" />
      </div>
    </CardHeroesWrapper>
  );
});

export default CardHeroes;
