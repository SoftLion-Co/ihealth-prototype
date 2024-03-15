import { Context } from "@/store/ContextProvider";

import { observer } from "mobx-react-lite";
import { redirect } from "next/navigation";
import React, { useContext } from "react";

const Profile = () => {
  const { store } = useContext(Context);
  const { email } = store.user;
  return (
    <>
      <nav>
        <h2>{JSON.stringify(store)}</h2>
      </nav>
      <button
        onClick={() => {
          store.logout();
          redirect("/ua/");
        }}
      >
        Logout
      </button>
    </>
  );
};

export default observer(Profile);
