import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ProfileImage = ({ userInfo }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userInfo) {
      setIsLoading(false);
    }
  }, [userInfo]);

  if (isLoading) {
    return null;
  }
  return <Profile src={userInfo.properties && userInfo.properties.thumbnail_image} />;
};

const mapStateToProps = (state) => {
  if (state) {
    return {
      userInfo: state.user.kakao,
    };
  }
};

export default connect(mapStateToProps)(ProfileImage);

const Profile = styled.img`
  position: absolute;
  font-size: small;
  top: 15px;
  height: 45px;
  right: 100px;
  z-index: 999;
  width: auto;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid white;
  border-radius: 100%;
  background-color: white;

  cursor: pointer;
`;
