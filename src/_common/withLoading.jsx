import React from 'react';

const withLoading = (WrappedComponent) => {
  const WithLoading = ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Component Loading</div>;
    }
    return <WrappedComponent {...props} />;
  };

  WithLoading.displayName = `withLoading(${WrappedComponent.displayName})`;
  return WithLoading;
};

export default withLoading;
