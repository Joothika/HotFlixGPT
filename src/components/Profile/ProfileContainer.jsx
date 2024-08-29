import React from "react";
import {
  ProfileMenuBar,
  ProfileMenuList,
  UserInformation,
} from "../../utils/ExportComponents";
const ProfileContainer = () => {
  return (
    <main className="grid grid-rows-12 bg-black pr-[2rem] pt-[4rem] sm:pl-[5rem] sm:pt-[2rem] lg:pl-[6rem]">
      <section className="order-2 row-span-11 ml-8 mt-6 lg:mt-10">
        <ProfileMenuBar />
        <ProfileMenuList />
      </section>
      <section className="lg:px-auto order-1 row-span-1 ml-[2rem] bg-white/20 shadow-md shadow-white/20">
        <UserInformation />
      </section>
    </main>
  );
};

export { ProfileContainer };
