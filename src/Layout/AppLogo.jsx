import React from 'react';
import styled from 'styled-components';

import TeamSVG from '../images/team.svg';
import { ITEM_HOVER } from '../_common/colors';
import { MOBILE_MIN_RESOLUTION_BOUNDARY } from '../_common/constants';

const APP_NAME = 'Leadscore-Contacts-App';

const AppLogoWrapper = styled.a.attrs({
  className: 'app-logo-wrapper',
  href: '/',
})`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${ITEM_HOVER};
  }
`;

const AppLogoHeader = styled.div`
  @media (min-width: ${MOBILE_MIN_RESOLUTION_BOUNDARY}) {
    display: inherit;
  }
  display: none;
`;

const AppLogoImage = styled.div`
  @media (min-width: ${MOBILE_MIN_RESOLUTION_BOUNDARY}) {
    display: none;
  }
  display: inherit;
`;

const AppLogo = () => (
  <AppLogoWrapper>
    <AppLogoImage>
      <TeamSVG height="50px" fill="white" style={{ padding: '10px' }} />
    </AppLogoImage>
    <AppLogoHeader>{APP_NAME}</AppLogoHeader>
  </AppLogoWrapper>
);

export default AppLogo;
