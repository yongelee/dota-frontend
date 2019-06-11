import {useState, useContext} from "react";
import {observer} from "mobx-react-lite";
import styled from "styled-components";


import {RootStoreContext} from "../../lib/rootStore";

import StatsSelect from "../stats/StatsSelect";
import TournSelect from "../tourn/TournSelect";

const Wrapper = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  padding: 1rem;
`;
const Inner = styled.div`
/* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media (max-width: 800px) {
    padding: 0;
    div {
      margin-right: 0.5rem;
    }
  }
`;
const Dropdown = styled.div`
  margin-right: 2rem;
  position: relative;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 2rem;
  i {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  .box-name {
    font-size: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (max-width: 800px) {
    padding: 0.5rem 1rem;
    .box-name {
      font-size: 1rem;
      padding-right: 1rem;
    }
  }
`;
const DropdownContent = styled.div`
  background: white;
  cursor: auto;
  z-index: 12;
  position: absolute;
  top: 100%;
  left: 0;
  border: 2px solid gray;
  border-radius: 5px;
  border-top-left-radius: 0;
  display: none;
  opacity: 0;
  transition: all 0.1s;
  will-change: opacity;
  padding: 1rem;
`;

const Filter = observer(({client}) => {
  const {statsStore, tournamentStore} = useContext(RootStoreContext);

  const [stats, setStats] = useState(false);
  const [statsActive, setStatsActive] = useState(false);
  const [tourn, setTourn] = useState(false);
  const [tournActive, setTournActive] = useState(false);

  return (
    <Wrapper>
      <Inner>
        <Dropdown
          onMouseEnter={() => {
            setStats(true);
            setTimeout(() => {
              if (!statsActive) setStatsActive(true);
            }, 100);
          }}
          onMouseLeave={() => {
            setStats(false);
            setStatsActive(false);
          }}
        >
          <p className="box-name">Select stats</p>
          <i className="down" />
          <DropdownContent
            className={`${stats ? "trigger-enter" : ""} ${
              statsActive ? "trigger-enter-active" : ""
              }`}
          >
            <StatsSelect />
          </DropdownContent>
        </Dropdown>

        <Dropdown
          onMouseEnter={() => {
            setTourn(true);
            setTimeout(() => {
              if (!tournActive) setTournActive(true);
            }, 100);
          }}
          onMouseLeave={() => {
            setTourn(false);
            setTournActive(false);
          }}
        >
          <p className="box-name">Select Tournaments</p>
          <i className="down" />
          <DropdownContent
            className={`${tourn ? "trigger-enter" : ""} ${
              tournActive ? "trigger-enter-active" : ""
              }`}
          >
            <TournSelect client={client} />
          </DropdownContent>
        </Dropdown>

        <button className="button is-medium is-primary"
          onClick={() => {
            /**
             * Get selected stats
             * and tournaments from mobx stores
             * and send request to server
             * to update the results views
             */

            tournamentStore.setSelectedTournaments();
            statsStore.setLimit();
            statsStore.setMinGames();
            statsStore.setSelectedAvg();
            statsStore.setSelectedTotal();
          }}>View Results</button>
      </Inner>
    </Wrapper>
  );
});

export default Filter;
