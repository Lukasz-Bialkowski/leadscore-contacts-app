import React from 'react';

const withLoading = (WrappedComponent) => {
  const WithLoading = ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Component Loading</div>;
    }
    return <WrappedComponent {...props} />;
  };
  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithLoading.displayName = `withLoading(${wrappedComponentName})`;

  return WithLoading;
};

export default withLoading;
