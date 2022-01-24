import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <HeaderBox>
      <Bars icon={faBars} />
      <Logo src={logo} />
    </HeaderBox>
  );
};

export default Header;

const Bars = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  padding-right: 1rem;
`;

const Logo = styled.img`
  width: 50%;
`;

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
