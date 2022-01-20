import { useLocation } from "react-router-dom";
import { useUserAuthenticateSetter } from "../../../hooks/useUserAuthenticate";
import { removeCookieHandler } from "../../../utils/token/token-validation";
const Navbar = () => {
  const { pathname } = useLocation();
  const setUserAuth = useUserAuthenticateSetter();
  const handleUserLogOut = (setUserAuth, removeCookie) => {
    removeCookie("token");
    setUserAuth(false);
  };
  return (
    <div
      className={`p-0 px-3 m-0 w-100 navbar_div__container ${
        pathname === "/sign-in"
          ? "d-none"
          : "d-flex align-items-center justify-content-end"
      }`}
    >
      <button
        className="btn navbar_signout_button__container"
        onClick={() => handleUserLogOut(setUserAuth, removeCookieHandler)}
      >
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
