import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getList } from "../../../store";
import SearchResultBox from "./SearchResultBox";
import styled from "styled-components";

// import HOUSE from "../../../images/camp.png";
// import GIFTSHOP from "../../../images/giftshop.png";
// const { kakao } = window;

const SearchResultList = ({ categoryInfo, getList }) => {
  const [loading, setLoading] = useState(true);

  const getResult = async (url) => {
    const result = await axios.get(url);
    getList(categoryInfo.icon.iconName, result.data.data);
    setLoading(false);
  };

  useEffect(() => {
    if (categoryInfo && categoryInfo.list === "") {
      setLoading(true);
      getResult(categoryInfo.url);
    } else {
    }
  }, [categoryInfo]);

  // useEffect(() => {
  //   if (markerList) {
  //     let imageSrc;
  //     let imageOption;
  //     switch (markerList.name) {
  //       case "JEJU_CAMPING_URL":
  //         imageSrc = HOUSE;
  //         // imageSrc = GIFTSHOP;
  //         break;
  //       case "JEJU_SOCAR_URL":
  //         imageSrc = "https://www.pikpng.com/pngl/b/165-1656003_socar-png-clipart.png";

  //         break;
  //       default:
  //         break;
  //     }
  //     let markerImage;
  //     if (imageSrc) {
  //       markerImage = new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(24, 35), imageOption);
  //     }
  //     markerList.data.map((position) => {
  //       let marker = new kakao.maps.Marker({
  //         position: new kakao.maps.LatLng(position.latitude, position.longitude),
  //         title: position.longitude,
  //         image: markerImage ? markerImage : null,
  //         clickable: true,
  //       });

  //       markers.push(marker);
  //       return marker.setMap(kakaoMap);
  //     });
  //   }
  // });
  if (loading) {
    return null;
  }

  if (!categoryInfo.list) {
    return null;
  }

  return (
    <ResultList>
      {categoryInfo.list.map((searchResult, index) => (
        <SearchResultBox key={index} searchResult={searchResult} />
      ))}
    </ResultList>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.find((category) => category.focused === true));
  return { categoryInfo: state.find((category) => category.focused === true) };
};

const mapDispatchToProps = (dispatch) => {
  return { getList: (id, list) => dispatch(getList(id, list)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList);

const ResultList = styled.div`
  margin-top: 10px;
`;
