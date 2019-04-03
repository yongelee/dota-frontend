import { useState, useEffect } from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import StatsRow from "../components/StatsRow";
import FilterOptions from "../components/FilterOptions";
import Header from "../components/Header";
import TournamentsSelected from "../components/TournamentsSelected";

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
      <Header />
      <section className="section">
        <FilterMenu onClick={() => setOpen(!open)}>
          {`< Filter Options`}
        </FilterMenu>

        <div className="columns">
          <div className="column is-3">
            <FilterOptions client={apolloClient} open={open} />
          </div>

          <div className="column is-9">
            <div className="columns">
              <div className="column">
                <TournamentsSelected />
              </div>
            </div>

            <StatsRow />
          </div>
        </div>
      </section>
    </Layout>
  );
};
