import { useState } from "react";
import styled from "styled-components";

import Layout from "./layout";
import StatsRow from "./StatsRow";
import FilterOptions from "./FilterOptions";
import InfoTitle from "./InfoTitle";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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
  console.log("here rendered");
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <section className="section">
        <FilterMenu onClick={() => setOpen(!open)}>
          {`< Filter Options`}
        </FilterMenu>
        <InfoTitle />
        <Wrapper>
          <FilterOptions open={open} />
          <StatsRow />
        </Wrapper>
      </section>
    </Layout>
  );
};
