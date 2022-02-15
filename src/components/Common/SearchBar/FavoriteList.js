import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import FavoriteBox from "./FavoriteBox";
import { getFavorites } from "../../../_reducers/user";

const FavoriteList = ({ favorites, getFavorites }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    if (favorites) {
      setIsLoading(false);
    }
  }, [favorites]);

  if (isLoading) {
    return null;
  }

  return (
    <ResultList>
      {favorites.list.map((favorite, index) => (
        <FavoriteBox key={index} searchResult={favorite} />
      ))}
    </ResultList>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.user.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFavorites: () => dispatch(getFavorites()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);

const ResultList = styled.div`
  margin-top: 10px;
`;
