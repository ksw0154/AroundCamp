import React, { useState } from "react";
import styled from "styled-components";

import logo from "../../images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
      setIsName(true);
    }
  };

  const onChangeEmail = (e) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식이에요 : )");
      setIsEmail(true);
    }
  };

  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요 : )");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);

    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 틀려요. 다시 확인해주세요.");
      setIsPasswordConfirm(false);
    }
  };

  return (
    <>
      <LoginBox>
        <Logo src={logo} />

        <InputContainer>
          <InputBox>
            <FontAwesomeIcon icon={faUser} />
            <Input type="text" placeholder="이름" value={name} onChange={onChangeName} />
          </InputBox>
          {name.length > 0 && <MessageBox>{nameMessage}</MessageBox>}
        </InputContainer>

        <InputContainer>
          <InputBox>
            <FontAwesomeIcon icon={faEnvelope} />
            <Input type="email" placeholder="이메일" value={email} onChange={onChangeEmail} />
          </InputBox>
          {email.length > 0 && <MessageBox>{emailMessage}</MessageBox>}
        </InputContainer>

        <InputContainer>
          <InputBox>
            <FontAwesomeIcon icon={faLock} />
            <Input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
          </InputBox>
          {password.length > 0 && <MessageBox>{passwordMessage}</MessageBox>}
        </InputContainer>

        <InputContainer>
          <InputBox>
            <FontAwesomeIcon icon={faLock} />
            <Input type="password" placeholder="비밀번호 확인" value={passwordConfirm} onChange={onChangePasswordConfirm} />
          </InputBox>
          {passwordConfirm.length > 0 && <MessageBox>{passwordConfirmMessage}</MessageBox>}
        </InputContainer>

        <LoginSubmitBtn type="submit" value="회원가입" />
      </LoginBox>
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

const InputContainer = styled.div`
  min-width: 15rem;
  width: 15%;

  margin: 1.5rem 0;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  border: 0 none;
  margin-left: 0.5rem;

  :focus {
    outline: none;
  }
`;

const MessageBox = styled.div`
  position: absolute;
  color: green;
  font-size: small;
  padding-top: 0.5rem;
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
  margin-top: 1.5rem;
`;
