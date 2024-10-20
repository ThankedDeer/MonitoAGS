import MapComponent from "../components/MapComponent";
import Record from "../components/Record";
import Table from "../components/Table";

const Home = () => {
  return (
    <main className="h-screen">
      <MapComponent />
      <Record />
      <Table />
    </main>
  );
};

export default Home;
