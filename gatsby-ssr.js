import React from 'react';

export { wrapRootElement } from './gatsby/wrapRootElement';

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script type="text/javascript" src="https://www.google.com/recaptcha/api.js" />
  ]);
};
