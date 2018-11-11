import React from 'react';

import Placeholder, { NOTFOUND_SVG_NAME } from '../_common/Placeholder';

const TITLE = 'Page not found';
const SUBTITLE = 'Validate your url address.';
const CUSTOM_CLASS_NAME = 'main-leadscore-page';

const NotFoundPage = () => (
  <Placeholder
    title={TITLE}
    subtitle={SUBTITLE}
    svgName={NOTFOUND_SVG_NAME}
    customClassName={CUSTOM_CLASS_NAME}
  />
);

export default NotFoundPage;
