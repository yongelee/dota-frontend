import Head from "next/head";
import styled from "styled-components";

// import jug from "../static/img/jug.jpg";
// import pudge from "../static/img/pudge.jpg";

import Nav from "./Nav";

import "bulma/css/bulma.min.css";
import "../static/styles.css";

const Wrapper = styled.div`
  min-height: 100vh;
`;
const Inner = styled.div``;

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
