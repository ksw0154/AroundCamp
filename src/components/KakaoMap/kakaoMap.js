import React, { useState, useEffect } from "react";
const { kakao } = window;

const kakaoMap = () => {
  useEffect(() => {
    const center = new kakao.maps.LatLng(33.36256187769044, 126.52903781775196);
    const options = {
      center,
      level: 9,
    };

    const map = new kakao.maps.Map(container.current, options);

    setKakaoMap(map);
  }, []);
};

export default kakaoMap;
