import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import SpinnerCircle from './SpinnerCircle';

const WithInfiniteScroll = ({ children, hasMore, fetchFunc }) => (
  <InfiniteScroll hasMore={hasMore} loadMore={fetchFunc} loader={<SpinnerCircle key={0} />}>
    {children}
  </InfiniteScroll>
);

export default WithInfiniteScroll;
