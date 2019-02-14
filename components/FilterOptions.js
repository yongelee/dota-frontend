export default ({ open }) => {
  return (
    <div className={`filter-options ${open ? "filter-opened" : ""}`}>
      <div className="columns">
        <div className="column">
          <p>column 1</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <p>column 2</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <p>column 3</p>
        </div>
      </div>
    </div>
  );
};
