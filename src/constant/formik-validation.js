import * as Yup from "yup";
export const SIGN_IN_VALIDATION_SCHEMA = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
