import { useState, useEffect } from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import StatsRow from "../components/StatsRow";
import FilterOptions from "../components/FilterOptions";
import InfoTitle from "../components/InfoTitle";

const Wrapper = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  /*padding: 1rem;

  @media (max-width: 1087px) {
    mobile display

    .stats-row {
      width: 100%;
    }
  } */
`;

const FilterMenu = styled.div`
  position: fixed;
  top: 9%;
  right: 3%;
  z-index: 12;

  @media (min-width: 1088px) {
    display: none;
  }
`;

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <section className="section">
        <FilterMenu onClick={() => setOpen(!open)}>
          {`< Filter Options`}
        </FilterMenu>
        <InfoTitle />
        <Wrapper>
          <StatsRow />
          <FilterOptions open={open} />
        </Wrapper>
      </section>
    </Layout>
  );
};
