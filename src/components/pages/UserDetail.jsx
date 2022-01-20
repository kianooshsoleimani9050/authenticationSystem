import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import Loading from "../common/web/loading/Loading";
import SingleUserCard from "./home/SingleUserCard";
const UserDetail = () => {
  const { id } = useParams();
  const { result, loading, error } = useFetchData({
    path: "/api/users/" + id,
  });
  return (
    <div className="p-0 m-0 row align-items-center justify-content-center">
      {loading ? (
        <Loading />
      ) : (
        <SingleUserCard
          key={`singleUserCard${id}`}
          col="col-12 col-md-4 col-xl-3"
          id={id}
          email={result?.data?.email}
          firstName={result?.data?.first_name}
          lastName={result?.data?.last_name}
          avatar={result?.data?.avatar}
        />
      )}
    </div>
  );
};

export default UserDetail;
