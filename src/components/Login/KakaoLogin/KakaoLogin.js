import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../../Oauth/AuthInfo";

const KaKaoLogin = () => {
  return (
    <div>
      <a id="custom-login-btn" href={KAKAO_AUTH_URL}>
        <img src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
      </a>
    </div>
  );
};

export default KaKaoLogin;
