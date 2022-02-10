import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Icon = ({ info, changeCategory }) => {
  const [focusItem, setFocusItem] = useState(false);

  const onClick = () => {
    changeCategory(info.icon.iconName);
  };
  return (
    <Button onClick={onClick} isfocus={info.focused}>
      <Img icon={info.icon} />
      <Text>{info.text}</Text>
    </Button>
  );
};

export default Icon;

const Button = styled.button`
  width: 65px;
  height: 60px;
  background-color: ${(props) => (props.isfocus ? "pink" : "white")};
  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin: 0 2px;
`;

const Img = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: black;
  pointer-events: none;
`;

const Text = styled.div`
  padding-top: 3px;
  font-size: 11px;
  pointer-events: none;
`;
