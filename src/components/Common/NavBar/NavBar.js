import styled from "styled-components";
import NavList from "./NavList";
import Logo from "./Logo";

const NavBar = (props) => {
  const kakaoMap = props.map;
  return (
    <NavBox>
      <Logo />
      <NavList map={kakaoMap} />
    </NavBox>
  );
};

export default NavBar;

const NavBox = styled.div`
  min-width: 390px;
  display: flex;
  flex-direction: column;
`;
