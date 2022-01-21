import React from "react";
import styled from "styled-components";

const NaverLogin = () => {
  return <NaverBtn href={KAKAO_AUTH_URL}>Kakao Login</NaverBtn>;
};

export default NaverLogin;

const NaverBtn = styled.a``;
