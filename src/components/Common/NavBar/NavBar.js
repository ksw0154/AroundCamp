import styled from "styled-components";
import NavHeader from "./NavHeader";
import NavList from "./NavList";

const NavBar = (props) => {
  const kakaoMap = props.map;
  return (
    <NavBox>
      <NavHeader />
      <NavList map={kakaoMap} />
    </NavBox>
  );
};

export default NavBar;

const NavBox = styled.div`
  /* display: none; */
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  width: 30%;
`;
