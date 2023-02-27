import { useQuery } from "@apollo/client";
import { hogeQuery } from "../constants";

function DisplayHoge() {
  const { loading, error, data } = useQuery(hogeQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {data?.hogeCollection?.edges.map((item: any) => (
        <div key={item.node.id}>
          <h3>{item.node.name}</h3>
        </div>
      ))}
    </>
  );
}

function Hoge() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <DisplayHoge />
    </div>
  );
}

export default Hoge;
