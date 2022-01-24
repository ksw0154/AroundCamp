import styled from "styled-components";
import NavHeader from "./NavHeader";
import NavList from "./NavList";

const NavBar = () => {
  return (
    <NavBox>
      <NavHeader />
      <NavList />
    </NavBox>
  );
};

export default NavBar;

const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  width: 20%;
`;
