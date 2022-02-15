import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getList } from "../../../_reducers/category";
import SearchResultBox from "./SearchResultBox";
import styled from "styled-components";

const SearchResultList = ({ categoryInfo, getList }) => {
  const [loading, setLoading] = useState(true);

  const getResult = async (url) => {
    const result = await axios.get(url);
    getList(categoryInfo.icon.iconName, result.data.data);
    setLoading(false);
  };

  useEffect(() => {
    if (categoryInfo && categoryInfo.list === "" && categoryInfo.url) {
      setLoading(true);
      getResult(categoryInfo.url);
    }
  }, [categoryInfo]);

  if (loading) {
    return null;
  }

  return <ResultList>{categoryInfo.list ? categoryInfo.list.map((searchResult, index) => <SearchResultBox key={index} searchResult={searchResult} />) : null}</ResultList>;
};

const mapStateToProps = (state) => {
  return {
    categoryInfo: state.category.find((category) => category.focused === true),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (id, list) => dispatch(getList(id, list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList);

const ResultList = styled.div`
  margin-top: 10px;
`;
