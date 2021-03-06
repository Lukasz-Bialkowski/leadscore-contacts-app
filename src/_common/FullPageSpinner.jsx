import React from 'react';
import styled from 'styled-components';

import SpinnerCircleSVG from '../images/spinner.svg';
import { SPINNER_WRAPPER_COLOR } from "./colors";

const SpinnerWrapper = styled.div.attrs({ className: 'spinner-wrapper' })`
  position: absolute;
  border-radius: 10px;
  height: 55vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${SPINNER_WRAPPER_COLOR};
  align-items: center;
`;

const FullPageSpinner = ({ isFetching }) => (isFetching ? (
  <SpinnerWrapper>
    <SpinnerCircleSVG width="190" height="190" />
  </SpinnerWrapper>
) : null);

export default FullPageSpinner;
