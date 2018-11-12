import React from 'react';

import SpinnerCircle from "../_common/SpinnerCircle";

const withLoading = (WrappedComponent) => {
  const WithLoading = ({ isLoading, ...props }) => {
    if (isLoading) {
      return <SpinnerCircle />;
    }
    return <WrappedComponent {...props} />;
  };

  WithLoading.displayName = `withLoading(${WrappedComponent.displayName})`;
  return WithLoading;
};

export default withLoading;
