import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/logo.png";

const HeaderButton = () => {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/");
  };

  return (
    <Header>
      <Bars icon={faBars} />
      <Logo onClick={handlePage} src={logo} />
    </Header>
  );
};

export default HeaderButton;

const Header = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 999;
  width: 10%;
  margin: 0;
  padding: 0;
  display: none;
  justify-content: center;
  align-items: center;

  border: 1px solid white;
  border-radius: 15px;
  background-color: white;
`;

const Bars = styled(FontAwesomeIcon)`
  font-size: 1.3rem;
  padding-right: 1rem;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 50%;
  cursor: pointer;
`;
