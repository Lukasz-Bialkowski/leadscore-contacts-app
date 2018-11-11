import React from 'react';

import Placeholder, { UNAUTHORIZED_SVG_NAME } from '../_common/Placeholder';

const TITLE = 'Unauthorized access';
const SUBTITLE = 'Log in to the system to see page content';
const CUSTOM_CLASS_NAME = 'main-leadscore-page';

const UnauthorizedPage = () => (
  <Placeholder
    title={TITLE}
    subtitle={SUBTITLE}
    svgName={UNAUTHORIZED_SVG_NAME}
    customClassName={CUSTOM_CLASS_NAME}
  />
);

export default UnauthorizedPage;
