import React, { Suspense } from "react";

const withDynamicImport = Component => {
  const WithDynamicImport = props => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
  return WithDynamicImport;
};

export default withDynamicImport;
