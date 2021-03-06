import React from 'react';
import styled from 'styled-components';

import SpinnerCircleSVG from '../images/spinner.svg';

const SpinnerWrapper = styled.div.attrs({ className: 'spinner-wrapper' })`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const SpinnerCircle = ({ width = '80', height = '80' }) => (
  <SpinnerWrapper>
    <SpinnerCircleSVG
      width={width}
      height={height}
    />
  </SpinnerWrapper>
);

export default SpinnerCircle;
