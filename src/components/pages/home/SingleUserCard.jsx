import { Link } from "react-router-dom";
const SingleUserCard = ({
  id,
  email,
  firstName,
  lastName,
  avatar,
  col = "",
  className = "",
  path,
}) => {
  return (
    <div className={`p-2 m-0 ${col} ${className}`}>
      <div className="p-0 m-0 h-100 rounded shadow-sm border d-flex flex-column align-items-center justify-content-between">
        <img src={avatar} alt="" className="w-100 mb-2" />
        <div className="p-0 px-1 m-0 w-100 border-bottom d-flex align-items-center justify-content-between">
          <b>First Name</b>
          <span>{firstName}</span>
        </div>
        <div className="p-0 px-1 m-0 w-100 border-bottom d-flex align-items-center justify-content-between">
          <b>Last Name</b>
          <span>{lastName}</span>
        </div>
        <div className="p-0 px-1 m-0 w-100 d-flex flex-column">
          <b>Email</b>
          <span>{email}</span>
        </div>
        {path && (
          <Link to={path} className="my-2">
            See detail
          </Link>
        )}
      </div>
    </div>
  );
};

export default SingleUserCard;
