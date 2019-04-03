import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../lib/rootStore";

const StatsCheckboxes = observer(() => {
  const { statsStore } = useContext(RootStoreContext);

  return (
    <>
      <div className="columns is-mobile">
        {/* 1st half is averages per game */}
        <div className="column">
          <p className="subtitle has-text-white">Avg per game</p>

          {/* Select all button */}
          <div className="pretty p-default p-curve big-check checkbox-style">
            <input
              type="checkbox"
              checked={statsStore.allAvg}
              onChange={() => {
                const currentCheck = statsStore.allAvg;
                statsStore.allAvg = !currentCheck;
                Object.keys(statsStore.avg).forEach((key) => {
                  statsStore.avg[key].selected = !currentCheck;
                });
              }}
            />
            <div className="state p-primary has-text-white">
              <label>Select all</label>
            </div>
          </div>

          {/* All of the stats options */}
          {Object.keys(statsStore.avg).map((key, i) => (
            <div
              className="pretty p-default p-curve big-check checkbox-style"
              key={i}
            >
              <input
                type="checkbox"
                checked={statsStore.avg[key].selected}
                onChange={() =>
                  (statsStore.avg[key].selected = !statsStore.avg[key].selected)
                }
              />
              <div className="state p-success has-text-white">
                <label>
                  <p
                    className={`${
                      i % 2 === 0
                        ? "bold screaming-green-text"
                        : "font-light lime-text"
                    }`}
                  >
                    {statsStore.avg[key].name}
                  </p>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="columns">
        {/* 2nd half is total */}
        <div className="column">
          <p className="subtitle has-text-white">Total</p>

          {/* Select all button */}
          <div className="pretty p-default p-curve big-check checkbox-style">
            <input
              type="checkbox"
              checked={statsStore.allTotal}
              onChange={() => {
                const currentCheck = statsStore.allTotal;
                statsStore.allTotal = !currentCheck;
                Object.keys(statsStore.total).forEach((key) => {
                  statsStore.total[key].selected = !currentCheck;
                });
              }}
            />
            <div className="state p-primary has-text-white">
              <label>Select all</label>
            </div>
          </div>

          {Object.keys(statsStore.total).map((key, i) => (
            <div
              className="pretty p-default p-curve big-check checkbox-style"
              key={i}
            >
              <input
                type="checkbox"
                checked={statsStore.total[key].selected}
                onChange={() =>
                  (statsStore.total[key].selected = !statsStore.total[key]
                    .selected)
                }
              />
              <div className="state p-success has-text-white">
                <label>
                  <p
                    className={`${
                      i % 2 === 0
                        ? "bold blizzard-blue-text"
                        : "font-light sea-green-text"
                    }`}
                  >
                    {statsStore.total[key].name}
                  </p>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default StatsCheckboxes;
