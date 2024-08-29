import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DoneIcon from "@mui/icons-material/Done";
import LogoutIcon from "@mui/icons-material/Logout";
import { PROFILE_DUMMY_IMG } from "../../utils/constants";
import { fetchToken } from "../../utils/ExportComponents";
import { auth } from "../../../firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserActiveStatus } from "../../utils/ExportComponents";

const UserInformation = () => {
  const [subscribe, setSubscribe] = useState(true);
  const { signedInUserData } = useSelector((state) => state.userReducer);
  const { userActive } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favList = JSON.parse(localStorage.getItem("fav_list"));
  const watchList = JSON.parse(localStorage.getItem("watch_list"));
  const req_token = localStorage.getItem("req_token");
  useEffect(() => {
    if (req_token) {
      setSubscribe(false);
    } else {
      setSubscribe(true);
    }
  }, [req_token]);

  async function handleSignOut() {
    console.log("signout");
    await signOut(auth);
    dispatch(UserActiveStatus(false));
    if (!userActive) return navigate("/auth");
  }

  return (
    <section className="mt-4 rounded-md text-white lg:mt-10 lg:px-10">
      <figure className="ml-4 flex lg:mb-10 lg:ml-0 lg:flex-col lg:items-center lg:justify-center">
        <img
          src={
            signedInUserData?.photoURL
              ? `${signedInUserData?.photoURL}`
              : `${PROFILE_DUMMY_IMG}`
          }
          className="h-20 w-20 rounded-full lg:h-24 lg:w-24"
        />
        <figcaption className="ml-10 mt-7 text-lg font-semibold tracking-wide lg:ml-0 lg:mt-4">
          {signedInUserData?.displayName}
        </figcaption>
      </figure>
      <ul className="mx-10 flex grid-cols-2 flex-col justify-items-center text-stone-50/50 sm:mx-0 sm:ml-32 lg:ml-0 lg:grid lg:h-56 lg:items-center lg:justify-center lg:gap-x-6">
        <li className="hidden items-center lg:flex lg:w-[28rem] lg:justify-center lg:rounded-md lg:border lg:border-stone-500 lg:border-opacity-20 lg:py-8">
          <AccountCircleIcon
            sx={{ fontSize: { lg: "1.3rem" }, color: "#c0c0c0" }}
          />
          <h3 className="ml-4 text-xs tracking-wider lg:text-sm">
            {signedInUserData?.uid}
          </h3>
        </li>
        <li className="mt-6 flex items-center lg:mt-0 lg:w-[28rem] lg:justify-center lg:rounded-md lg:border lg:border-stone-500 lg:border-opacity-20 lg:py-8">
          <MailIcon sx={{ fontSize: { lg: "1.3rem" }, color: "#c0c0c0" }} />
          <h3 className="ml-4 text-xs tracking-wider lg:text-sm">
            {signedInUserData?.email}
          </h3>
        </li>

        <li className="mt-6 flex items-center lg:mt-0 lg:w-[28rem] lg:justify-center lg:rounded-md lg:border lg:border-stone-500 lg:border-opacity-20 lg:py-8">
          <FavoriteIcon sx={{ fontSize: { lg: "1.3rem" }, color: "#c0c0c0" }} />
          <h3 className="ml-4 text-xs tracking-wider lg:text-sm">
            {favList?.length}
          </h3>
        </li>
        <li className="mt-6 flex items-center lg:mt-0 lg:w-[28rem] lg:justify-center lg:rounded-md lg:border lg:border-stone-500 lg:border-opacity-20 lg:py-8">
          <BookmarkIcon sx={{ fontSize: { lg: "1.3rem" }, color: "#c0c0c0" }} />
          <h3 className="ml-4 text-xs tracking-wider lg:text-sm">
            {watchList?.length}
          </h3>
        </li>
      </ul>
      <section className="mx-8 my-10 grid grid-cols-2 gap-x-6 sm:mx-0 sm:my-8 sm:ml-[7.5rem] lg:my-12 lg:ml-0 lg:mt-4 lg:justify-items-center lg:gap-x-6">
        <div className="col-span-1" onClick={() => fetchToken()}>
          <h2
            className={
              subscribe
                ? `flex items-center justify-center rounded-md bg-gradient-to-tr from-sky-400 to-blue-600 px-6 py-3 text-xs tracking-wide lg:w-[28rem] lg:py-6 lg:text-sm`
                : `flex items-center justify-center rounded-md bg-gradient-to-tr from-gray-400 to-stone-500 px-6 py-3 text-xs tracking-wide lg:w-[28rem] lg:py-6 lg:text-sm`
            }
          >
            {subscribe ? (
              <>
                <span>Subscribe</span>
                <PlayArrowIcon
                  sx={{
                    fontSize: { xs: "1.2rem", lg: "1.5rem" },
                    marginLeft: "0.3rem",
                  }}
                />
              </>
            ) : (
              <>
                <span>Subscribed</span>
                <DoneIcon
                  sx={{
                    fontSize: { xs: "1.2rem", lg: "1.5rem" },
                    marginLeft: "0.3rem",
                  }}
                />
              </>
            )}
          </h2>
        </div>
        <div>
          <button
            className="rounded-md bg-gradient-to-tr from-red-400 to-red-500 px-6 py-3 text-sm tracking-wide lg:w-[28rem] lg:border lg:border-sky-400 lg:border-opacity-10 lg:bg-none lg:py-6"
            onClick={() => handleSignOut()}
          >
            <span className="text-xs text-white lg:text-sm">Logout</span>
            <LogoutIcon
              sx={{
                fontSize: { xs: "1.2rem", lg: "1.5rem" },
                marginLeft: "0.3rem",
              }}
            />
          </button>
        </div>
      </section>
    </section>
  );
};

export { UserInformation };
