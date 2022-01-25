import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../../Oauth/AuthInfo";
import Logo from "../../../images/kakaoLogin.png";

const KaKaoLogin = () => {
  return (
    <a id="custom-login-btn" href={KAKAO_AUTH_URL}>
      <LoginBtn src={Logo} alt="kakao_login" />
    </a>
  );
};

export default KaKaoLogin;

const LoginBtn = styled.img`
  min-width: 13rem;
  width: 10%;
  padding: 0.5rem 0;
`;
