import React from 'react';
import styled from 'styled-components';

import ErrorSVG from '../images/error.svg';
import EmptySVG from '../images/empty.svg';
import NotFoundSVG from '../images/notfound.svg';
import UnauthorizedSVG from '../images/unauthorized.svg';
import { PAGE_PLACEHOLDER_SUBTITLE } from './colors';

export const ERROR_SVG_NAME = 'error';
export const EMPTY_SVG_NAME = 'empty';
export const NOTFOUND_SVG_NAME = 'notfound';
export const UNAUTHORIZED_SVG_NAME = 'unauthorized';

const PlaceholderContainer = styled.div.attrs({
  className: ({ customClassName }) => `${customClassName}`,
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div.attrs({ className: 'title' })`
  width: 80%;
  text-align: center;
  font-size: 60px;
  font-weight: 900;
  padding-top: 30px;
  padding-bottom: 10px;
`;

const Subtitle = styled.div.attrs({ className: 'title' })`
  width: 80%;
  font-size: 24px;
  text-align: center;
  color: ${PAGE_PLACEHOLDER_SUBTITLE};
`;

const SVGIcon = ({ svgName }) => {
  switch (svgName) {
    case ERROR_SVG_NAME:
      return <ErrorSVG height="200px" />;
    case EMPTY_SVG_NAME:
      return <EmptySVG fill="white" height="200px" />;
    case NOTFOUND_SVG_NAME:
      return <NotFoundSVG fill="white" height="200px" />;
    case UNAUTHORIZED_SVG_NAME:
      return <UnauthorizedSVG fill="white" height="200px" />;
    default:
      return null;
  }
};

const Placeholder = ({ customClassName, title, subtitle, svgName }) => (
  <PlaceholderContainer customClassName={customClassName}>
    {svgName && <SVGIcon svgName={svgName} />}
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </PlaceholderContainer>
);

export default Placeholder;
