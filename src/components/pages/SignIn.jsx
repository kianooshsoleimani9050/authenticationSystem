import { useFormik } from "formik";
import { SIGN_IN_INITIAL_VALUES } from "../../constant/formik-initial-values";
import { SIGN_IN_VALIDATION_SCHEMA } from "../../constant/formik-validation";
import { useSignInUser } from "../../hooks/useSignInUser";
const SignIn = () => {
  const { mutate, loading, error } = useSignInUser();
  const formik = useFormik({
    initialValues: SIGN_IN_INITIAL_VALUES,
    validationSchema: SIGN_IN_VALIDATION_SCHEMA,
    onSubmit: (values) => {
      mutate(values);
    },
  });
  return (
    <div className="p-0 m-0 sign_in_page_div__container d-flex align-items-center justify-content-center">
      <div className="p-0 m-0 sign_in_form__container">
        <form
          onSubmit={formik.handleSubmit}
          className="p-0 m-0 d-flex flex-column align-items-center justify-content-center h-100"
        >
          <h1>Sign in</h1>
          <div className="form-group w-75">
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              placeholder="Please Enter your Username"
            />
            {formik.errors.username && formik.touched.username && (
              <small className="text-danger">{formik.errors.username}</small>
            )}
          </div>
          <div className="form-group w-75 my-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Please Enter your Password"
            />
            {formik.errors.password && formik.touched.password && (
              <small className="text-danger">{formik.errors.password}</small>
            )}
          </div>
          {loading ? (
            "Loading..."
          ) : (
            <button
              type="submit"
              className="mt-3 w-75 btn sign_in_form_button__submit"
            >
              Sign in
            </button>
          )}
          {error.isError && (
            <small className="text-danger">{error.errorMsg}</small>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
