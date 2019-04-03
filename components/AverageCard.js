import styled from "styled-components";

const CardWrapper = styled.div`
  margin: 2rem 0;
`;

const AverageCard = ({ name, scores }) => {
  return (
    <CardWrapper className="card score-card-style border-top-avg">
      <div className="card-header-style">
        <h2 className="title">{`Average ${name}`}</h2>
        <hr />
      </div>
      <table className="table is-fullwidth is-striped is-hoverable">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Games Played</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, i) => {
            let size;
            if (i === 0) {
              size = "is-size-3";
            } else if (i === 1) {
              size = "is-size-4";
            } else if (i === 2) {
              size = "is-size-5";
            } else {
              size = "is-size-6";
            }
            return (
              <tr key={i}>
                <td className={`${size}`}>{`${i + 1}.`}</td>
                <td className={`${size}`}>{score.name}</td>
                <td className={`${size}`}>
                  {numberWithCommas(Number(score.average).toFixed(2))}
                </td>
                <td className={`${size}`}>{score.games_played}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </CardWrapper>
  );
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default AverageCard;
