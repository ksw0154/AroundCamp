import { useEffect, useState } from "react";
import { JEJU_CAMPING_URL } from "../Oauth/AuthInfo";
import axios from "axios";

const { kakao } = window;

const Camp = (props) => {
  const [campList, setCampList] = useState("");
  const kakaoMap = props.map;

  console.log("here");
  const getCampList = async () => {
    try {
      const response = await axios.get(JEJU_CAMPING_URL);
      console.log(response);
      setCampList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCampList();
  }, []);

  useEffect(() => {
    if (campList) {
      campList.data.map((camp) => {
        let marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(camp.latitude, camp.longitude),
          title: camp.longitude,
          clickable: true,
        });

        return marker.setMap(kakaoMap);
      });
    }
  }, [campList, kakaoMap]);

  return null;
};
export default Camp;
