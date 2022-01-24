import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const HeaderList = () => {
  return (
    <List>
      <Item>
        <Icon icon={faCampground} />
        캠핑장
      </Item>
      <Item>
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
