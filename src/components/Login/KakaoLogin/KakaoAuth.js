import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { REST_API_KEY, REDIRECT_URI } from "../../Oauth/AuthInfo";

const KakaoAuth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const GET_TOKKEN_URL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`;

  const getToken = async () => {
    try {
      const res = await axios.post(GET_TOKKEN_URL, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      window.Kakao.init(REST_API_KEY);
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div>KakaoAuth</div>;
};

export default KakaoAuth;
