import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';

import { HeaderStyle } from './styles';

export default function Header() {
  return (
    <HeaderStyle>
      <Link to="/">
        <img src={Logo} width={200} alt="logo" />
      </Link>
    </HeaderStyle>
  );
}
