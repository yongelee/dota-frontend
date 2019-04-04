import { observable, computed, toJS } from "mobx";

export class StatsStore {
  rootStore;
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  setSelectedAvg() {
    const avgToJS = toJS(this.avg);
    this.avgToGet = Object.keys(avgToJS)
      .filter((key) => avgToJS[key].selected)
      .map((a) => a);
  }

  setSelectedTotal() {
    const totalToJS = toJS(this.total);
    this.totalToGet = Object.keys(totalToJS)
      .filter((key) => totalToJS[key].selected)
      .map((t) => t);
  }

  @computed get selectedAvg() {
    const avgToJS = toJS(this.avg);
    return Object.keys(avgToJS)
      .filter((key) => avgToJS[key].selected)
      .map((a) => a);
  }

  @computed get selectedTotal() {
    const totalToJS = toJS(this.total);
    return Object.keys(totalToJS)
      .filter((key) => totalToJS[key].selected)
      .map((t) => t);
  }

  @observable allAvg = false;

  @observable avg = {
    kills: {
      selected: true,
      name: "Kills"
    },
    deaths: {
      selected: true,
      name: "Deaths"
    },
    assists: {
      selected: true,
      name: "Assists"
    },
    denies: {
      selected: true,
      name: "Denies"
    },
    camps_stacked: {
      selected: true,
      name: "Camps Stacked"
    },
    gold: {
      selected: true,
      name: "Gold"
    },
    gold_per_min: {
      selected: true,
      name: "Gold Per Min"
    },
    xp_per_min: {
      selected: true,
      name: "XP Per Min"
    },
    pings: {
      selected: false,
      name: "Pings"
    },
    last_hits: {
      selected: false,
      name: "Last Hits"
    },
    level: {
      selected: false,
      name: "Level"
    },
    teamfight_participation: {
      selected: false,
      name: "Teamfight Participation"
    },
    tower_damage: {
      selected: false,
      name: "Tower Damage"
    },

    firstblood_claimed: {
      selected: false,
      name: "First Blood Claimed"
    },
    gold_spent: {
      selected: false,
      name: "Gold Spent"
    },
    hero_damage: {
      selected: false,
      name: "Hero Damage"
    },
    hero_healing: {
      selected: false,
      name: "Hero Healing"
    },

    max_hero_hit: {
      selected: false,
      name: "Max Hero Hit"
    },
    obs_placed: {
      selected: false,
      name: "Obs Placed"
    },
    roshans_killed: {
      selected: false,
      name: "Roshans killed"
    },
    rune_pickups: {
      selected: false,
      name: "Rune pickups"
    },
    sens_placed: {
      selected: false,
      name: "Sens placed"
    },
    courier_kills: {
      selected: false,
      name: "Courier kills"
    },
    observer_kills: {
      selected: false,
      name: "Observer kills"
    },
    sentry_kills: {
      selected: false,
      name: "Sentry kills"
    },
    ancient_kills: {
      selected: false,
      name: "Ancient kills"
    },
    purchase_gem: {
      selected: false,
      name: "Gems purchased"
    }
  };

  @observable allTotal = false;

  @observable total = {
    kills: {
      selected: true,
      name: "Kills"
    },
    deaths: {
      selected: true,
      name: "Deaths"
    },
    assists: {
      selected: true,
      name: "Assists"
    },
    denies: {
      selected: true,
      name: "Denies"
    },
    camps_stacked: {
      selected: true,
      name: "Camps Stacked"
    },
    gold: {
      selected: true,
      name: "Gold"
    },
    gold_per_min: {
      selected: true,
      name: "Gold Per Min"
    },
    xp_per_min: {
      selected: true,
      name: "XP Per Min"
    },
    pings: {
      selected: false,
      name: "Pings"
    },
    last_hits: {
      selected: false,
      name: "Last Hits"
    },
    level: {
      selected: false,
      name: "Level"
    },
    teamfight_participation: {
      selected: false,
      name: "Teamfight Participation"
    },
    tower_damage: {
      selected: false,
      name: "Tower Damage"
    },
    firstblood_claimed: {
      selected: false,
      name: "First Blood Claimed"
    },
    gold_spent: {
      selected: false,
      name: "Gold Spent"
    },
    hero_damage: {
      selected: false,
      name: "Hero Damage"
    },
    hero_healing: {
      selected: false,
      name: "Hero Healing"
    },

    max_hero_hit: {
      selected: false,
      name: "Max Hero Hit"
    },
    obs_placed: {
      selected: false,
      name: "Obs Placed"
    },
    roshans_killed: {
      selected: false,
      name: "Roshans killed"
    },
    rune_pickups: {
      selected: false,
      name: "Rune pickups"
    },
    sens_placed: {
      selected: false,
      name: "Sens placed"
    },
    courier_kills: {
      selected: false,
      name: "Courier kills"
    },
    observer_kills: {
      selected: false,
      name: "Observer kills"
    },
    sentry_kills: {
      selected: false,
      name: "Sentry kills"
    },
    ancient_kills: {
      selected: false,
      name: "Ancient kills"
    },
    purchase_gem: {
      selected: false,
      name: "Gems purchased"
    }
  };

  @observable avgToGet = Object.keys(this.avg)
    .filter((key) => this.avg[key].selected)
    .map((a) => a);
  @observable totalToGet = Object.keys(this.total)
    .filter((key) => this.total[key].selected)
    .map((t) => t);
}
