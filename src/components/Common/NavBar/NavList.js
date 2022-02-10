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
import Icon from "./Icon";

import { JEJU_CAMPING_URL, JEJU_SOCAR_URL } from "../../Oauth/AuthInfo";

const { kakao } = window;

const itemList = [
  { text: "캠핑장", icon: faCampground, url: JEJU_CAMPING_URL, focused: false },
  { text: "쏘카", icon: faCarSide, url: JEJU_SOCAR_URL, focused: false },
  { text: "기념품 가게", icon: faStore, url: "", focused: false },
  { text: "즐겨 찾기", icon: faStar, url: "", focused: false },
  { text: "좋아요", icon: faHeart, url: "", focused: false },
];

const HeaderList = ({ map }) => {
  const kakaoMap = map;
  const [markerList, setMarkerList] = useState();
  const [categoryList, setCategoryList] = useState(itemList);

  const changeCategory = (id) => {
    setCategoryList(categoryList.map((category) => (category.focused = false)));
    setCategoryList(categoryList.filter((category) => (category.icon.iconName === id ? (category.focused = true) : category)));
  };

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
    <>
      <Title>카테고리 검색</Title>
      <ItemBox>
        {categoryList.map((item, index) => (
          <Icon info={item} key={index} changeCategory={changeCategory} />
        ))}
      </ItemBox>
    </>
  );
};

export default HeaderList;

const ItemBox = styled.div`
  display: flex;
  margin-left: 20px;
`;

const Title = styled.div`
  font-size: 15px;
  margin-left: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;
