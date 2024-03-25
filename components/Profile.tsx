import { Context } from "@/store/ContextProvider";
import { TextInput, Stack, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

import { observer } from "mobx-react-lite";
import { redirect } from "next/navigation";
import React, { useContext, useState } from "react";
import ProfileSection from "./profile/ProfileSection";

const sections = [
  "My profile",
  "My orders",
  "Wishlist",
  "Recently viewed",
  "My reviews",
];

const Profile = () => {
  const { store } = useContext(Context);
  const { user } = store;
  const [section, setSection] = useState(sections[0]);

  return (
    <div className="container grid grid-cols-7">
      <section className=" col-span-2">
        <nav className=" rounded border border-gray-200 shadow-lg col-span-2">
          <h1 className="font-bold text-20 pt-[25px] px-[20px]">{`${user.firstName} ${user.lastName}`}</h1>
          <p className="text-gray-400 pb-[15px] px-[20px]">{user.email}</p>
          {sections.map((item, index) => (
            <p
              key={index}
              onClick={() => {
                setSection(item);
              }}
              className={
                item === section
                  ? "border-t-[1px] border-gray-200 bg-primary text-white cursor-pointer py-[10px] px-[20px]"
                  : "border-t-[1px] border-gray-200 cursor-pointer py-[10px] px-[20px]"
              }
            >
              {item}
            </p>
          ))}
          <p
            onClick={() => {
              store.logout();
              redirect("/ua");
            }}
            className="border-t-[1px] border-gray-200 py-[7px] px-[20px] cursor-pointer"
          >
            Logout
          </p>
        </nav>
      </section>
      {section === "My profile" && <ProfileSection />}
    </div>
  );
};

export default observer(Profile);
