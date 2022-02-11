import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleFocus } from "../../../store";

const CategoryIcon = ({ categoryInfo, changeFocus }) => {
  const onClick = () => {
    changeFocus(categoryInfo.icon.iconName);
  };
  return (
    <Button onClick={onClick} isfocus={categoryInfo.focused}>
      <Img icon={categoryInfo.icon} />
      <Text>{categoryInfo.text}</Text>
    </Button>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { categoryInfo: state.find((category) => category.icon.iconName === ownProps.id) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFocus: (id) => dispatch(handleFocus(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIcon);

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
