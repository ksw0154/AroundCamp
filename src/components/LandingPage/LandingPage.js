import React from "react";
import styled from "styled-components";

import SearchBar from "../Common/SearchBar/SearchBar";
import HeaderButton from "../Common/MapButton/HeaderButton";
import LoginButton from "../Common/MapButton/LoginButton";
import Map from "../KakaoMap/Map";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <SearchBar />
        <HeaderButton />
        <LoginButton />
        <Map />
      </Container>
    </div>
  );
};

export default LandingPage;

const Container = styled.div`
  display: flex;
`;
