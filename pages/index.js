import { useState, useEffect } from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import StatsRow from "../components/StatsRow";
import FilterOptions from "../components/FilterOptions";
import InfoTitle from "../components/InfoTitle";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1100px;
`;

const FilterMenu = styled.div`
  position: fixed;
  top: 9%;
  right: 3%;
  z-index: 12;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background: white;
  padding: 4px;

  @media (min-width: 1088px) {
    display: none;
  }
`;

export default ({ apolloClient }) => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <InfoTitle />
      <section className="section has-background-white-bis">
        <FilterMenu onClick={() => setOpen(!open)}>
          {`< Filter Options`}
        </FilterMenu>
        <Wrapper>
          <StatsRow />
          <FilterOptions open={open} client={apolloClient} />
        </Wrapper>
      </section>
    </Layout>
  );
};
