import { useEffect, useState } from "react";
import { JEJU_SOCAR_URL } from "../Oauth/AuthInfo";
import axios from "axios";

const { kakao } = window;

const Socar = (props) => {
  const [socarList, setSocarList] = useState("");

  const getSocarList = async () => {
    try {
      const response = await axios.get(JEJU_SOCAR_URL);
      setSocarList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSocarList();
  }, []);

  useEffect(() => {
    const kakaoMap = props.map;
    if (socarList) {
      let imageSrc = "https://www.pikpng.com/pngl/b/165-1656003_socar-png-clipart.png";
      let imageSize = new kakao.maps.Size(24, 35);

      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      socarList.data.map((camp) => {
        let marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(camp.latitude, camp.longitude),
          title: camp.longitude,
          image: markerImage,
          clickable: true,
        });

        marker.setMap(kakaoMap);
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

        const overlay = new kakao.maps.CustomOverlay({
          content: iwContent,
          position: marker.getPosition(),
        });

        kakao.maps.event.addListener(marker, "mouseover", function () {
          overlay.setMap(kakaoMap);
        });

        kakao.maps.event.addListener(marker, "mouseout", function () {
          overlay.setMap(null);
        });

        kakao.maps.event.addListener(marker, "click", function () {
          window.open(camp.placeUrl, "_blank");
        });
      });
    }
  }, [socarList]);

  return null;
};
export default Socar;
