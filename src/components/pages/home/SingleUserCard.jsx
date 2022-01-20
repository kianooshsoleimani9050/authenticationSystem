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
      <div className="p-0 m-0 border d-flex flex-column align-items-center justify-content-center">
        <img src={avatar} alt="" className="w-100" />
        <div className="p-0 px-1 m-0 w-100 d-flex align-items-center justify-content-between">
          <span>First Name</span>
          <span>{firstName}</span>
        </div>
        <div className="p-0 px-1 m-0 w-100 d-flex align-items-center justify-content-between">
          <span>Last Name</span>
          <span>{lastName}</span>
        </div>
        <div className="p-0 px-1 m-0 w-100 d-flex flex-column">
          <span>Email</span>
          <span>{email}</span>
        </div>
        {path && <Link to={path}>See detail</Link>}
      </div>
    </div>
  );
};

export default SingleUserCard;
