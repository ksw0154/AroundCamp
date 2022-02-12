import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getList } from "../../../store";
import SearchResultBox from "./SearchResultBox";
import styled from "styled-components";

// import HOUSE from "../../../images/camp.png";
// import GIFTSHOP from "../../../images/giftshop.png";
// const { kakao } = window;

const SearchResultList = ({ categoryInfo, getList }) => {
  const [loading, setLoading] = useState(true);

  const getResult = async (url) => {
    const result = await axios.get(url);
    getList(categoryInfo.icon.iconName, result.data.data);
    setLoading(false);
  };

  useEffect(() => {
    if (categoryInfo && categoryInfo.list === "") {
      setLoading(true);
      getResult(categoryInfo.url);
    } else {
    }
  }, [categoryInfo]);

  if (loading) {
    return null;
  }

  if (!categoryInfo.list) {
    return null;
  }

  return (
    <ResultList>
      {categoryInfo.list.map((searchResult, index) => (
        <SearchResultBox key={index} searchResult={searchResult} />
      ))}
    </ResultList>
  );
};

const mapStateToProps = (state) => {
  return { categoryInfo: state.find((category) => category.focused === true) };
};

const mapDispatchToProps = (dispatch) => {
  return { getList: (id, list) => dispatch(getList(id, list)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList);

const ResultList = styled.div`
  margin-top: 10px;
`;
