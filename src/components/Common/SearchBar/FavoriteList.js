import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import FavoriteBox from "./FavoriteBox";
import { getFavorites } from "../../../_reducers/user";
import { useNavigate } from "react-router-dom";

const FavoriteList = ({ userInfo, favorites, getFavorites }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const onClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    getFavorites();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <MessageList>
        {!userInfo && <LoginBtn onClick={onClick}>login 하러 가기</LoginBtn>}
        {userInfo && (!favorites || favorites.length === 0) && <MessageBox>즐겨찾기 내용이 없습니다.</MessageBox>}
      </MessageList>
      {userInfo && favorites && (
        <ResultList>
          {favorites.list.map((favorite, index) => (
            <FavoriteBox key={index} searchResult={favorite} />
          ))}
        </ResultList>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.user.favorites,
    userInfo: state.user.kakao,
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
  overflow-y: auto;
  height: 100%;
`;

const MessageList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MessageBox = styled.div`
  padding: 15px;
  color: white;
  border: none;
  font-size: 13px;
  border-radius: 15px;
  background-color: #f5a002;
`;

const LoginBtn = styled.button`
  padding: 15px;
  color: white;
  border: none;
  border-radius: 15px;
  background-color: #f5a002;
  cursor: pointer;
`;
