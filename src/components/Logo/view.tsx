import React from 'react';

import { Logo } from './styles';

const logo = require('../../assets/images/logo.png');

export function LogoView() {
  return <Logo source={logo} />;
}
