import {toJS} from "mobx";
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "../lib/rootStore";
import {useContext} from "react";

import StatsDisplay from "./StatsDisplay";

const StatsRow = observer(() => {
  /**
   * GET SELECTED VALUES
   * THEN SEND TO STATSDISPLAY COMPONENT
   * WHICH WILL MAKE THE REQUEST TO GET THOSE DATAS
   */
  const {tournamentStore, statsStore} = useContext(RootStoreContext);

  const avg = toJS(statsStore.avgToGet);
  const total = toJS(statsStore.totalToGet);
  const tournaments = toJS(tournamentStore.tournamentsToGet).map((t) => t.key);
  const limit = statsStore.limitToGet;
  const minGames = statsStore.minGamesToGet;

  if (avg.length === 0 || total.length === 0 || tournaments.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <StatsDisplay
      avg={avg}
      total={total}
      tournaments={tournaments}
      limit={limit}
      minGames={minGames}
    />
  );
});

export default StatsRow;
