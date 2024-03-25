"use client";

import Profile from "@/components/Profile";
import { Context } from "@/store/ContextProvider";
import { redirect } from "next/navigation";
import React, { useContext, useEffect } from "react";

const Page = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("ihealthtoken")) {
      store.checkAuth();
    } else {
      redirect("/ua");
    }
  }, []);

  return <Profile />;
};

export default Page;
