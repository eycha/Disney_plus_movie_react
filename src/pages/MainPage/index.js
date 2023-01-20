import React from "react";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import Nav from "../../components/Nav";
import Row from "../../components/Row";
import styled from "styled-components";
import requests from "../../api/request";
const MaingPage = () => {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category></Category>
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Up Coming" id="UC" fetchUrl={requests.fetchUpComing}></Row>
    </Container>
  );
};

export default MaingPage;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc (3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
