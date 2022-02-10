import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import KakaoLogin from "./KakaoLogin/KakaoLogin";
import NaverLogin from "./NaverLogin/NaverLogin";
import logo from "../../images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [ID, setID] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const onIdHandler = (event) => {
    setID(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onPageHandler = () => {
    navigate("/register");
  };

  return (
    <>
      <LoginBox>
        <Logo src={logo} />

        <LoginInputBox>
          <FontAwesomeIcon icon={faUser} />
          <InputBox type="email" placeholder="Email" value={ID} onChange={onIdHandler} />
        </LoginInputBox>

        <LoginInputBox>
          <FontAwesomeIcon icon={faLock} />
          <InputBox type="password" placeholder="비밀번호" value={Password} onChange={onPasswordHandler} />
        </LoginInputBox>

        <LoginSubmitBtn type="submit" value="로그인" />
      </LoginBox>
      <RegisterBtn onClick={() => onPageHandler()}>회원가입</RegisterBtn>
      <SocialLoginBox>
        <p style={{ color: "#bbb" }}>간편 로그인</p>
        <KakaoLogin />
        <NaverLogin />
      </SocialLoginBox>
    </>
  );
};

export default LoginPage;

const LoginBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  min-width: 10rem;
  width: 15%;
  padding-top: 2rem;
`;

const LoginInputBox = styled.div`
  min-width: 15rem;
  width: 15%;

  display: flex;
  padding: 1rem 1.5rem;
  align-items: center;

  border: 1px solid #bbb;
  border-collapse: collapse;
  border-radius: 12px;

  margin: 0.5rem;

  input {
    padding: 0.5rem;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px transparent inset;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const InputBox = styled.input`
  width: 100%;
  border: 0 none;
  margin-left: 0.5rem;

  :focus {
    outline: none;
  }
`;

const LoginSubmitBtn = styled.input`
  min-width: 15rem;
  width: 15%;
  box-sizing: content-box;
  color: white;
  background-color: green;
  padding: 1rem 1.5rem;
  border: 0 none;
  border-radius: 12px;
  margin: 0.5rem;
`;

const SocialLoginBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterBtn = styled.button`
  min-width: 15rem;
  width: 15%;
  box-sizing: content-box;
  color: green;
  background-color: white;
  padding: 1rem 1.5rem;
  border: 1px solid green;
  border-radius: 12px;
  margin: 0.5rem;
  cursor: pointer;
`;
