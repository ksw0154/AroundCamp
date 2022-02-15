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
  const [kakaoInfo, setStorageInfo] = useState(JSON.parse(localStorage.getItem("kakaoInfo")));

  const getKakaoProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      localStorage.setItem("kakaoInfo", JSON.stringify(data));
      getUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (kakaoInfo) {
      getUserInfo(kakaoInfo);
      setIsLogin(true);
    } else if (localStorage.length !== 0) {
      getKakaoProfile();
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
            <ProfileImage />
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

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (data) => dispatch(getUserInfo(data)),
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);

const Container = styled.div`
  display: flex;
`;
