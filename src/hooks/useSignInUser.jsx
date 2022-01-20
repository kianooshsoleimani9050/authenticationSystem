import { useState } from "react";
import { onSignInSubmit } from "../utils/pages/sign-in/sign-in-submit-form";
import { useUserAuthenticateSetter } from "./useUserAuthenticate";
export const useSignInUser = () => {
  const setUserAuth = useUserAuthenticateSetter();
  const [error, setError] = useState({ errorMsg: "", isError: false });
  const [loading, setLoading] = useState(false);
  const mutate = async (values) => {
    setLoading(true);
    const { status, error } = await onSignInSubmit(values);
    if (status === 200) {
      setUserAuth(true);
    }
    if (error) {
      setError({
        isError: true,
        errorMsg: error,
      });
    }
    setLoading(false);
    setTimeout(() => setError((prev) => ({ ...prev, isError: false })), 1500);
  };
  return {
    error,
    loading,
    mutate,
  };
};
