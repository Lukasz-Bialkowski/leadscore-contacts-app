import React from 'react';
import styled from 'styled-components';

import LinkedInSVG from '../images/linkedin.svg';
import GithubSVG from '../images/github.svg';
import { FOOTER_WRAPPER_COLOR, ITEM_HOVER } from '../_common/colors';

const FooterWrapper = styled.footer.attrs({ className: 'footer' })`
  text-align: center;
  background-color: ${FOOTER_WRAPPER_COLOR};
  padding: 30px;
`;

const LinksWrapper = styled.div.attrs({
  className: 'links-wrapper',
  href: props => props.href,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const Link = styled.a.attrs({ className: 'link' })`
  padding: 0px 10px;
`;

const LinkedInLink = styled.a.attrs({
  className: 'linked-in-link',
  href: props => props.href,
})`
  font-weight: 700;
  text-decoration: underline;
  &:hover {
    color: ${ITEM_HOVER};
  }
`;

const Footer = () => (
  <FooterWrapper>
    Leadscore-Contacts-App by&nbsp;
    <LinkedInLink href="https://www.linkedin.com/in/%C5%82ukasz-bia%C5%82kowski-8ba74a123/">
      @Lukasz Bialkowski
    </LinkedInLink>
    <LinksWrapper>
      <Link href="https://www.linkedin.com/in/%C5%82ukasz-bia%C5%82kowski-8ba74a123/">
        <LinkedInSVG height="20px" fill="white" />
      </Link>
      <Link href="https://github.com/Lukasz-Bialkowski">
        <GithubSVG height="20px" fill="white" />
      </Link>
    </LinksWrapper>
  </FooterWrapper>
);

export default Footer;
