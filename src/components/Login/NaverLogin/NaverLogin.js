import React from "react";
import styled from "styled-components";
import Logo from "../../../images/naverLogin.png";

const NaverLogin = () => {
  return (
    <a id="custom-login-btn" href="">
      <LoginBtn src={Logo} alt="naver_login" />
    </a>
  );
};

export default NaverLogin;

const LoginBtn = styled.img`
  min-width: 13rem;
  width: 15%;
  padding: 0.5rem 0;
`;
