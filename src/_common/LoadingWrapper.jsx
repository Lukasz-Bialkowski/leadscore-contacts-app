import React from 'react';

import SpinnerCircle from "../_common/SpinnerCircle";

const LoadingWrapper = ({isFetching, children}) => {
  if (isFetching) {
    return <SpinnerCircle />;
  } else {
    return <div>{children}</div>;
  }
}

export default LoadingWrapper;
