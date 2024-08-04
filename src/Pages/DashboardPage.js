import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserActiveStatus } from "../store/userSlice";
import { ContentBox, MenuBar } from "../utils/ExportComponents";
import { useEffect } from "react";
const DashboardPage = () => {
  const navigate = useNavigate();
  const { userActive } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  async function signOutUser() {
    await signOut(auth);
    dispatch(UserActiveStatus(false));
    if (!userActive) return navigate("/auth");
  }

  return (
    <section className="flex">
      <MenuBar />
      <Outlet />
      {/* <button onClick={signOutUser}>signout</button> */}
    </section>
  );
};

export default DashboardPage;
