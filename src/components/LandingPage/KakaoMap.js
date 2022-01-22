import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { JEJU_SOCAR_URL } from "../Oauth/AuthInfo";
import "./Marker.css";

const { kakao } = window;

const KakaoMap = () => {
  const [location, setLocation] = useState({
    latitude: 33.507395454736255,
    longitude: 126.49255836723125,
  });
  const [campList, setCampList] = useState("");

  // const [dragLocation, setDragLocation] = useState({
  //   latitude: 0,
  //   longitude: 0,
  // });

  // 현재 좌표 구하기
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, error);
  // }, []);

  const getCampList = async () => {
    try {
      const response = await axios.get(JEJU_SOCAR_URL);
      setCampList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCampList();

    // kakao.maps.event.addListener(map, "dragend", function () {
    //   const latlng = map.getCenter();
    //   setDragLocation({ latitude: latlng.getLat(), longitude: latlng.getLng() });
    // });
  }, []);

  useEffect(() => {
    const container = document.getElementById("KakaoMap");
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 8,
    };

    const map = new kakao.maps.Map(container, options);
    map.setCenter(new kakao.maps.LatLng(location.latitude, location.longitude));
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(location.latitude, location.longitude),
    });

    marker.setMap(map);

    if (campList) {
      let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      let imageSize = new kakao.maps.Size(24, 35);

      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      campList.data.map((camp) => {
        let marker = new kakao.maps.Marker({
          // map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(camp.latitude, camp.longitude),
          // position: camp.latitude, // 마커를 표시할 위치
          title: camp.longitude, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
          clickable: true,
        });
        marker.setMap(map);
        const iwContent =
          '<div class="wrap">' +
          '    <div class="info">' +
          '        <div class="title">' +
          `            ${camp.placeName}` +
          "        </div>" +
          '        <div class="body">' +
          '            <div class="img">' +
          "           </div>" +
          '            <div class="desc">' +
          `                <div class="ellipsis">${camp.addressDoro || camp.addressJibun}</div>` +
          `                <div class="jibun ellipsis">${camp.category}</div>` +
          `                <div><a href=${camp.placeUrl} target="_blank" class="link">Kakao Map 홈페이지</a></div>` +
          "            </div>" +
          "        </div>" +
          "    </div>" +
          "</div>";

        var overlay = new kakao.maps.CustomOverlay({
          content: iwContent,
          position: marker.getPosition(),
        });

        kakao.maps.event.addListener(marker, "mouseover", function () {
          overlay.setMap(map);
        });

        kakao.maps.event.addListener(marker, "mouseout", function () {
          overlay.setMap(null);
        });

        kakao.maps.event.addListener(marker, "click", function () {
          window.open(camp.placeUrl, "_blank");
        });
      });
    }
  }, [campList]);

  // const success = (position) => {
  //   const { latitude, longitude } = position.coords;
  //   setLocation({ latitude, longitude });
  // };

  // const error = () => {
  //   console.log("error");
  // };

  return (
    <div>
      <MapContainer id="KakaoMap" />
    </div>
  );
};

export default KakaoMap;

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
