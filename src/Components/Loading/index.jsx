import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import LoadingWrapper from './style';
import Thor from './Thor';

const Loading = memo(({ loading }) => {
  const [load, setLoad] = useState(loading);

  useEffect(() => {
    setTimeout(() => {
      if (!loading) {
        setLoad(false);
      }
    }, 2000);
  }, [loading]);

  return (
    <React.Fragment>
      {load && (
        <LoadingWrapper>
          <div className="load">
            <Thor />
          </div>
        </LoadingWrapper>
      )}
    </React.Fragment>
  );
});

Loading.propTypes = {
  loading: PropTypes.bool
};

Loading.defaultProps = {
  loading: false
};

export default Loading;
