import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleFocus } from "../../../_reducers/category";

const CategoryIcon = ({ categoryInfo, userInfo, changeFocus }) => {
  const onClick = () => {
    changeFocus(categoryInfo.icon.iconName);
  };
  return (
    <Button onClick={onClick} isfocus={categoryInfo.focused}>
      <Img icon={categoryInfo.icon} isfocus={categoryInfo.focused} />
      <Text>{categoryInfo.text}</Text>
    </Button>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categoryInfo: state.category.find((category) => category.icon.iconName === ownProps.id),
    userInfo: state.user,
  };
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
  background-color: ${(props) => (props.isfocus ? "#f5a002" : "white")};
  color: ${(props) => (props.isfocus ? "white" : "black")};
  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin: 0 2px;
`;

const Img = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${(props) => (props.isfocus ? "white" : "black")};
  pointer-events: none;
`;

const Text = styled.div`
  padding-top: 3px;
  font-size: 11px;
  pointer-events: none;
`;
