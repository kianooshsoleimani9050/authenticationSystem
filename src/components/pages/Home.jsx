import { useFetchData } from "../../hooks/useFetchData";
import Loading from "../common/web/loading/Loading";
import SingleUserCard from "./home/SingleUserCard";

const Home = () => {
  const { result, loading, error } = useFetchData({
    path: "/api/users",
    query: "page=2",
  });
  return (
    <div className="p-2 p-md-4 m-0 row">
      {loading ? (
        <Loading />
      ) : (
        <>
          {result?.data?.map(({ id, email, first_name, last_name, avatar }) => (
            <SingleUserCard
              key={`singleUserCard${id}`}
              col="col-12 col-sm-6 col-md-4 col-xl-3"
              id={id}
              email={email}
              firstName={first_name}
              lastName={last_name}
              avatar={avatar}
              path={"/user/" + id}
            />
          ))}
        </>
      )}
      {error?.isError && <span className="text-danger">{error?.errorMsg}</span>}
    </div>
  );
};

export default Home;
