import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from "../components";
import { loginUserThunk } from "../features/user/thunks/loginUserThunk";
import { registerUserThunk } from "../features/user/thunks/registerUserThunk";
import { useUserSlice } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Register = () => {
  const { isLoading, user } = useUserSlice();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(user, isLoading);
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, isMember, password } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUserThunk({ email, password }));
      return;
    }
    dispatch(registerUserThunk({ name, email, password }));
  };
  const toggleMember = () =>
    setValues({ ...values, isMember: !values.isMember });
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* Form Row */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading ..." : "Submit"}
        </button>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() => {
            dispatch(
              loginUserThunk({ email: "testUser@test.com", password: "secret" })
            );
          }}
        >
          {isLoading ? "loading..." : "demo"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
