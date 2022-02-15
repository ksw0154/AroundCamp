import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../Common/SearchBar/SearchBar";
import HeaderButton from "../Common/MapButton/HeaderButton";
import ProfileImage from "../Common/MapButton/ProfileImage";
import LoginButton from "../Common/MapButton/LoginButton";
import LogOutButton from "../Common/MapButton/LogoutButton";
import Map from "../KakaoMap/Map";

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const getProflie = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setIsLogin(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setIsLogin(true);
    } else if (localStorage.length !== 0) {
      getProflie();
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

export default LandingPage;

const Container = styled.div`
  display: flex;
`;
