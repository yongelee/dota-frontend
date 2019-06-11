import Head from "next/head";
import styled from "styled-components";

// import jug from "../static/img/jug.jpg";
// import pudge from "../static/img/pudge.jpg";

import Nav from "./Nav";

import "pretty-checkbox/dist/pretty-checkbox.min.css";
import "bulma/css/bulma.min.css";
import "../static/styles.css";

const Wrapper = styled.div`
  /* background-color: #eaeaea; */
  min-height: 100vh;
`;
const Inner = styled.div``;

export default ({children}) => (
  <div>
    <Head>
      <title>
        Road to 4k | Search for top performers at Dota 2 tournaments!
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Wrapper>
      <Nav />
      <Inner>{children}</Inner>
    </Wrapper>
  </div>
);
