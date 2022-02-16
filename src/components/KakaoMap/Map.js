import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import "./Marker.css";

const { kakao } = window;

const Map = ({ pinList, favorites }) => {
  const [kakaoMap, setKakaoMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const container = useRef(null);
  const initMap = () => {
    const center = new kakao.maps.LatLng(33.36256187769044, 126.52903781775196);
    const options = {
      center,
      level: 8,
    };
    const map = new kakao.maps.Map(container.current, options);
    setKakaoMap(map);
  };

  const getMarkers = () => {
    let tmp = [];

    const locationList = pinList ? pinList : favorites.list;

    locationList.list.map((position) => {
      let marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(position.latitude, position.longitude),
        title: position.longitude,
        image: null,
        clickable: true,
      });
      let infowindow = new kakao.maps.InfoWindow({
        content: position.placeName,
      });

      kakao.maps.event.addListener(marker, "mouseover", makeOverListener(kakaoMap, marker, infowindow));
      kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));

      tmp.push(marker);
    });
    setMarkers(tmp);
  };

  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  const hideMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
  };

  const showMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(kakaoMap);
    });
  };

  useEffect(() => {
    initMap();
  }, []);

  useEffect(() => {
    if (pinList) {
      hideMarkers();
      getMarkers();
    }
  }, [pinList]);

  useEffect(() => {
    if (favorites) {
      hideMarkers();
      getMarkers();
    }
  }, [favorites]);

  useEffect(() => {
    if (markers.length !== 0) {
      showMarkers();
    }
  }, [markers]);

  return <MapContainer id="KakaoMap" ref={container} />;
};

const mapStateToProps = (state) => {
  return {
    pinList: state.category.find((category) => category.focused === true && Array.isArray(category.list)),
    favorites: state.user.favorites,
  };
};

export default connect(mapStateToProps)(Map);

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
