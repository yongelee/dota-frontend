import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../lib/rootStore";
import { toJS } from "mobx";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;
  padding: 2rem;
`;
const TournamentTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TournamentsSelected = observer(() => {
  const { tournamentStore } = useContext(RootStoreContext);
  const tournaments = toJS(tournamentStore.tournamentsToGet).map((t) => t.name);
  return (
    <Wrapper>
      <p className="title has-text-white has-text-centered">
        Tournaments Selected
      </p>
      <hr />
      <TournamentTagWrapper className="tags">
        {tournaments.map((tourn, i) => {
          if (i % 2 === 0) {
            return (
              <span key={i} className="tag is-light is-medium border-top-tag">
                {tourn}
              </span>
            );
          }
          return (
            <span key={i} className="tag is-light is-medium border-top-tag2">
              {tourn}
            </span>
          );
        })}
      </TournamentTagWrapper>
    </Wrapper>
  );
});

export default TournamentsSelected;
