import { createContext } from "react";
import { StatsStore } from "./statsStore";
import { TournamentStore } from "./tournamentStore";

export class RootStore {
  tournamentStore = new TournamentStore(this);
  statsStore = new StatsStore(this);
}

export const RootStoreContext = createContext(new RootStore());
