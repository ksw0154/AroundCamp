import React from "react";
import GoogleLogin from "./GoogleLogin";
import KakaoLogin from "./KakaoLogin/KakaoLogin";

const LoginPage = () => {
  return (
    <div>
      <div>아이디</div>
      <div>비밀번호</div>
      <div>로그인</div>
      <div>
        <KakaoLogin />
        <GoogleLogin />
      </div>
    </div>
  );
};

export default LoginPage;
