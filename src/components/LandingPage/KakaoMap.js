import React, { useEffect, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const KakaoMap = () => {
  const [userLocation, setLocaion] = useState(new kakao.maps.LatLng(33.4507, 126.570667));

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocaion(new kakao.maps.LatLng(latitude, longitude));
  };

  const error = () => {
    console.log("error");
  };

  navigator.geolocation.getCurrentPosition(success, error);

  useEffect(() => {
    const container = document.getElementById("KakaoMap");

    const options = {
      center: userLocation,
      level: 4,
    };

    const map = new kakao.maps.Map(container, options);

    // map 드래그할 때마다 해당 좌표를 구해온다.
    kakao.maps.event.addListener(map, "dragend", function () {
      // console.log(map.getCenter());
    });
  });

  return <MapContainer id="KakaoMap" />;
};

export default KakaoMap;

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
