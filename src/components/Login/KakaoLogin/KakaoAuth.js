import axios from "axios";
import React, { useEffect } from "react";
import { REST_API_KEY, REDIRECT_URI } from "../../Oauth/AuthInfo";

const KakaoAuth = () => {
  // 인가 코드
  const code = new URL(window.location.href).searchParams.get("code");
  const GET_TOKKEN_URL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`;

  axios
    .post(GET_TOKKEN_URL, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => console.log(response.data.access_token))
    .catch((e) => console.log(e));
  return <div>KakaoAuth</div>;
};

export default KakaoAuth;
