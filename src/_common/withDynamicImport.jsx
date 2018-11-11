import React, { Suspense } from 'react';

import SpinnerCircle from './SpinnerCircle';

const withDynamicImport = (Component) => {
  const WithDynamicImport = props => (
    <Suspense fallback={<SpinnerCircle />}>
      <Component {...props} />
    </Suspense>
  );
  return WithDynamicImport;
};

export default withDynamicImport;
