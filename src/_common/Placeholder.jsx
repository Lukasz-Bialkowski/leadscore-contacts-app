import React from "react";
import styled from "styled-components";

const PlaceholderContainer = styled.div.attrs({
  className: ({ customClassName }) => `${customClassName}`
})``;

const Img = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt
})``;

const Placeholder = ({ customClassName, title, subtitle, imgSrc, imgAlt }) => (
  <PlaceholderContainer customClassName={customClassName}>
    <Img src={imgSrc} alt={imgAlt} />
    <div>{title}</div>
    <div>{subtitle}</div>
  </PlaceholderContainer>
);

export default Placeholder;
