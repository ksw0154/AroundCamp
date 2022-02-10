import React from "react";
import styled from "styled-components";
import logo from "../../../images/logo.png";

const Logo = () => {
  return <LogoBox src={logo} />;
};

export default Logo;

const LogoBox = styled.img`
  align-self: center;
  width: 150px;
`;
