import {observable, computed, toJS} from "mobx";

export class TournamentStore {
  rootStore;
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable limit = 10;

  @observable tournamentsToGet = [];

  @observable allTournaments = false;

  @observable tournaments = new Object();

  @computed get selectedTournaments() {
    const tournamentsToJS = toJS(this.tournaments);
    return Object.keys(tournamentsToJS)
      .filter((key) => tournamentsToJS[key].selected)
      .map((t) => ({key: t, name: tournamentsToJS[key].name}));
  }

  setSelectedTournaments() {
    const tournamentsToJS = toJS(this.tournaments);
    const updateSelectedTournaments = Object.keys(tournamentsToJS)
      .filter((key) => tournamentsToJS[key].selected)
      .map((t) => ({key: t, name: tournamentsToJS[t].name}));
    this.tournamentsToGet = updateSelectedTournaments;
  }

  updateTournaments(data) {
    const tournamentObject = new Object();
    if (data && data.data && data.data.tournamentFormOptions) {
      data.data.tournamentFormOptions.forEach((tournament) => {
        tournamentObject[tournament.id] = {
          name: tournament.name,
          season: tournament.season,
          selected: true
        };
      });
    }
    this.tournaments = tournamentObject;
    this.setSelectedTournaments();
  }
}
