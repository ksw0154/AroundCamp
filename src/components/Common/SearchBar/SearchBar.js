import styled from "styled-components";
import Logo from "./Logo";
import CategoryBox from "./CategoryBox";
import SearchResultList from "./SearchResultList";

const NavBar = (props) => {
  const kakaoMap = props.map;
  return (
    <NavBox>
      <Logo />
      <Title>카테고리 검색</Title>
      <CategoryBox />

      <Title>검색 결과</Title>
      <SearchResultList />
    </NavBox>
  );
};

export default NavBar;

const NavBox = styled.div`
  min-width: 390px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 15px;
  margin-left: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 20px;
`;
