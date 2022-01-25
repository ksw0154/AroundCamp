import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import HOUSE from "../../../images/camp.png";
import GIFTSHOP from "../../../images/giftshop.png";
import axios from "axios";

import { JEJU_CAMPING_URL, JEJU_SOCAR_URL } from "../../Oauth/AuthInfo";

const { kakao } = window;

const HeaderList = ({ map }) => {
  const kakaoMap = map;
  const [markerList, setMarkerList] = useState();

  const markers = [];

  const markersHandler = async (url, name) => {
    try {
      if (markers) {
        for (let i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
      }
      const response = await axios.get(url);

      response.data.name = name;
      setMarkerList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (markerList) {
      let imageSrc;
      let imageOption;
      switch (markerList.name) {
        case "JEJU_CAMPING_URL":
          imageSrc = HOUSE;
          // imageSrc = GIFTSHOP;
          break;
        case "JEJU_SOCAR_URL":
          imageSrc = "https://www.pikpng.com/pngl/b/165-1656003_socar-png-clipart.png";

          break;
        default:
          break;
      }
      let markerImage;
      if (imageSrc) {
        markerImage = new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(24, 35), imageOption);
      }
      markerList.data.map((position) => {
        let marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(position.latitude, position.longitude),
          title: position.longitude,
          image: markerImage ? markerImage : null,
          clickable: true,
        });

        markers.push(marker);
        return marker.setMap(kakaoMap);
      });
    }
  });

  return (
    <List>
      <Item onClick={() => markersHandler(JEJU_CAMPING_URL, "JEJU_CAMPING_URL")}>
        <Icon icon={faCampground} />
        캠핑장
      </Item>
      <Item onClick={() => markersHandler(JEJU_SOCAR_URL, "JEJU_SOCAR_URL")}>
        <Icon icon={faCarSide} />
        쏘카
      </Item>
      <Item>
        <Icon icon={faStore} />
        기념품 가게
      </Item>
      <Item>
        <Icon icon={faStar} style={{ color: "#f6e24b" }} />
        즐겨찾기
      </Item>
      <Item>
        <Icon icon={faHeart} style={{ color: "red" }} />
        좋아요
      </Item>
    </List>
  );
};

export default HeaderList;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  text-align: start;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: auto;
`;

const Icon = styled(FontAwesomeIcon)`
  font-weight: normal;
  font-size: 1.5rem;

  padding-right: 0.5rem;
`;
