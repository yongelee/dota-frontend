import {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "../../lib/rootStore";

const StatsSelect = observer(() => {
  const {statsStore} = useContext(RootStoreContext);
  return (
    <>
      <div className="columns">
        <div className="column is-half">

          <p className="subtitle">Minimum # games played:</p>
          <div className="select is-fullwidth">

            <select value={statsStore.minGames} onChange={(e) => {
              statsStore.minGames = Number(e.target.value)
            }}>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>

        <div className="column is-half">
          <p className="subtitle"># of results:</p>

          <div className="select is-fullwidth">

            <select value={statsStore.limit} onChange={(e) => {
              statsStore.limit = Number(e.target.value)
            }}>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className="columns">
        <div className="column is-half" style={{width: "fit-content"}}>
          <p className="subtitle">Avg per game</p>
          <div style={{

            overflow: "auto",
            maxHeight: "500px"
          }}>




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
              <div className="state p-primary">
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
                <div className="state p-success">
                  <label>
                    <p
                    // className={`${
                    //   i % 2 === 0
                    //     ? "bold screaming-green-text"
                    //     : "font-light lime-text"
                    //   }`}
                    >
                      {statsStore.avg[key].name}
                    </p>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="column is-half">
          <p className="subtitle">Total</p>
          <div style={{

            overflow: "auto",
            maxHeight: "500px"
          }}>

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
              <div className="state p-primary">
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
                <div className="state p-success">
                  <label>
                    <p
                    // className={`${
                    //   i % 2 === 0
                    //     ? "bold blizzard-blue-text"
                    //     : "font-light sea-green-text"
                    //   }`}
                    >
                      {statsStore.total[key].name}
                    </p>
                  </label>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
});


export default StatsSelect;
