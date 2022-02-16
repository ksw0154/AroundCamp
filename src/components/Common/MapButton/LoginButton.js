import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  return <LoginButton onClick={login}>로그인</LoginButton>;
};

export default Login;

const LoginButton = styled.div`
  position: absolute;
  font-size: 12px;
  top: 15px;
  right: 15px;
  z-index: 999;
  width: auto;
  margin: 0;
  padding: 0.8rem;
  color: white;
  background-color: #f5a002;
  border: 1px solid #f5a002;
  border-radius: 15px;
  cursor: pointer;
`;
