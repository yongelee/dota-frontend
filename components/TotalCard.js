const AverageCard = ({ name, scores }) => {
  return (
    <div className="card score-card-style">
      <div className="card-header-style">
        <h2 className="title">{`Most ${name}`}</h2>
        <hr />
      </div>
      <table className="table is-fullwidth is-striped is-hoverable">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, i) => (
            <tr key={i}>
              <td>{`${i + 1}.`}</td>
              <td>{score.name}</td>
              <td>{score.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AverageCard;
