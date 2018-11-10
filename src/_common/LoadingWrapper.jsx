import React from 'react';

const LoadingWrapper = ({isFetching, isError, children}) => {
  console.log('Loading wrapper: ', );
  if (isFetching) {
    return <div>LOADING IN PROGRESS!</div>;
  } else {
    return <div>{children}</div>;
  }
}

export default LoadingWrapper;
