import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components";
import { updateUserThunk } from "../../features/user/thunks/updateUserThunk";
import { useUserSlice } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useUserSlice();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !lastName || !location || !email) {
      toast.error("lease Fill Out All Fields");
      return;
    }
    dispatch(updateUserThunk(userData));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>

        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
