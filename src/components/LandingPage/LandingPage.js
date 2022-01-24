import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "./Marker.css";

import NavBar from "../Common/NavBar/NavBar";
import Camp from "../KakaoMap/Camp";
import Socar from "../KakaoMap/Socar";

const { kakao } = window;

const LandingPage = () => {
  const [kakaoMap, setKakaoMap] = useState(null);

  const container = useRef(null);

  useEffect(() => {
    const center = new kakao.maps.LatLng(33.36256187769044, 126.52903781775196);
    const options = {
      center,
      level: 9,
    };

    const map = new kakao.maps.Map(container.current, options);

    setKakaoMap(map);
  }, []);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    const center = kakaoMap.getCenter();
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(center.Ma, center.La),
    });

    marker.setMap(kakaoMap);
  }, [kakaoMap]);

  return (
    <div>
      <Container>
        <NavBar />
        <MapContainer id="KakaoMap" ref={container} />
      </Container>
      <Camp map={kakaoMap} />
      <Socar map={kakaoMap} />
    </div>
  );
};

export default LandingPage;

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
`;
