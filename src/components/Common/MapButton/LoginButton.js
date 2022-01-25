import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/login");
  };

  return <LoginButton onClick={handlePage}>로그인</LoginButton>;
};

export default Login;

const LoginButton = styled.div`
  position: absolute;
  font-size: small;
  top: 15px;
  right: 15px;
  z-index: 999;
  width: auto;
  margin: 0;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid white;
  border-radius: 15px;
  background-color: white;

  cursor: pointer;
`;
