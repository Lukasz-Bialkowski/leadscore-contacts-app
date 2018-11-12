import React from 'react';
import styled from 'styled-components';

const VALIDATION_ERROR_MESSAGE = 'Wrong credentials or network problem.';

const ValidationErrorWrapper = styled.div.attrs({
  className: 'validation-error-wrapper',
})`
  font-weight: 700;
  text-decoration: underline;
`;

const ValidationError = ({ isError }) => (isError ? (
  <ValidationErrorWrapper>{VALIDATION_ERROR_MESSAGE}</ValidationErrorWrapper>
) : null);

export default ValidationError;
