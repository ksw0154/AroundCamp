import React from "react";
import styled from "styled-components";

const ProfileImage = ({ image }) => {
  return <Profile src={image} />;
};

export default ProfileImage;

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
