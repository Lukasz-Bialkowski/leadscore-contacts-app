import React from "react";
import InfiniteScroll from "react-infinite-scroller";

const WithInfiniteScroll = ({ children, hasMore, fetchFunc }) => (
  <InfiniteScroll hasMore={hasMore} loadMore={fetchFunc} loader={<div key={0}>LOADING</div>}>
    {children}
  </InfiniteScroll>
);

export default WithInfiniteScroll;
