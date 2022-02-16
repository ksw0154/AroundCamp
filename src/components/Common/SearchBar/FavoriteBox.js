import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { deleteFavorite } from "../../../_reducers/user";

const FavoriteBox = ({ searchResult, deleteFavorite }) => {
  const updateFavorites = () => {
    deleteFavorite(searchResult);
  };

  return (
    <ResultBox>
      <Header>
        <Title>{searchResult.placeName}</Title>
        <Icons>
          <Icon onClick={updateFavorites}>
            <FontAwesomeIcon style={{ color: "#f5a002" }} icon={faMinusSquare} />
          </Icon>
        </Icons>
      </Header>
      <div>
        <Address>{searchResult.addressDoro}</Address>
        <Address>(지번) {searchResult.addressJibun}</Address>
      </div>
      <Footer>
        <Category>{searchResult.category}</Category>
        <PlaceUrl href={searchResult.placeUrl} target="_blank" rel="noopener noreferrer">
          상세보기
        </PlaceUrl>
      </Footer>
    </ResultBox>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite)),
  };
};

export default connect(null, mapDispatchToProps)(FavoriteBox);

const ResultBox = styled.div`
  padding: 20px 20px;
  border-bottom: 1px solid lightgray;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icons = styled.div`
  display: flex;
`;

const Icon = styled.div`
  padding: 3px;
  margin: 0 3px;
  color: gray;
  /* border: 1px solid lightgray; */
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 17px;
`;

const Address = styled.p`
  font-size: 12px;
  line-height: 8px;
  color: gray;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
`;

const Category = styled.div`
  font-size: 13px;
`;

const PlaceUrl = styled.a`
  font-size: 12px;
  margin-left: 8px;
  :link,
  :visited {
    color: #f5a002;
  }
`;
