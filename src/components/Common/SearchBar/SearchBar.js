import styled from "styled-components";
import Logo from "./Logo";
import CategoryBox from "./CategoryBox";
import SearchResultList from "./SearchResultList";
import FavoriteList from "./FavoriteList";
import { connect } from "react-redux";

const NavBar = ({ categoryInfo }) => {
  return (
    <NavBox>
      <Logo />
      <Title>카테고리 검색</Title>
      <CategoryBox />

      <Title>검색 결과</Title>
      {categoryInfo && categoryInfo.icon.iconName === "star" ? <FavoriteList /> : <SearchResultList />}
    </NavBox>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryInfo: state.category.find((category) => category.focused === true),
  };
};

export default connect(mapStateToProps)(NavBar);

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
