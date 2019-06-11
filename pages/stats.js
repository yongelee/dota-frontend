import Layout from "../components/layout";
import StatsRow from "../components/StatsRow";
import Filter from "../components/filter/Filter";

const Stats = ({apolloClient}) => {
  return (
    <Layout>
      <Filter client={apolloClient} />

      <section className="section">
        <div className="columns is-centered">
          <StatsRow />
        </div>
      </section>
    </Layout>
  );
};
export default Stats;
