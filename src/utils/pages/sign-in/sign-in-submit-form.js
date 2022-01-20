import { ApiCallHandler } from "../../common/api-calls-handler";
import {
  checkCanUseCookie,
  setCookieFromApi,
} from "../../token/token-validation";

export const onSignInSubmit = async (values) => {
  const { status, _resToJson } = await ApiCallHandler(
    "POST",
    "/api/login",
    values
  );
  if (status === 200) {
    const canUseCookie = checkCanUseCookie();
    if (canUseCookie) {
      setCookieFromApi("token", _resToJson?.token);
    }
    return { status, _resToJson, error: false };
  } else {
    return { status, _resToJson, error: _resToJson?.error };
  }
};
