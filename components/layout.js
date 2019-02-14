import Head from "next/head";
import styled from "styled-components";

import Nav from "./Nav";

import "bulma/css/bulma.min.css";
import "../static/styles.css";

const Wrapper = styled.div`
  /* background: #fc100; */
  min-height: 100vh;
`;
const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
`;

export default ({ children }) => (
  <div>
    <Head>
      <title>Swag report</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Wrapper>
      <Nav />
      <Inner>{children}</Inner>
    </Wrapper>
  </div>
);
