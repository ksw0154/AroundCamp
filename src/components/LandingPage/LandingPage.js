import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../Common/SearchBar/SearchBar";
import HeaderButton from "../Common/MapButton/HeaderButton";
import ProfileImage from "../Common/MapButton/ProfileImage";
import LoginButton from "../Common/MapButton/LoginButton";
import LogOutButton from "../Common/MapButton/LogoutButton";
import Map from "../KakaoMap/Map";
import { connect } from "react-redux";
import { getUserInfo } from "../../_reducers/user";

const LandingPage = ({ userInfo, getUserInfo }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [storageInfo, setStorageInfo] = useState(JSON.parse(localStorage.getItem("userInfo")));

  const getProflie = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      getUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(storageInfo);
    if (storageInfo) {
      getUserInfo(storageInfo);
      setIsLogin(true);
    } else if (localStorage.length !== 0) {
      getProflie();
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      <Container>
        <SearchBar />
        <HeaderButton />
        {isLogin ? (
          <>
            <ProfileImage image={userInfo.kakaoInfo.thumbnail} />
            <LogOutButton />
          </>
        ) : (
          <LoginButton />
        )}
        <Map />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (id) => dispatch(getUserInfo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

const Container = styled.div`
  display: flex;
`;
