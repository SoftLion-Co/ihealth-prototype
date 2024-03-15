import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import React, { useContext, useEffect } from "react";
import { useForm } from "@mantine/form";
import { FaSquareFacebook } from "react-icons/fa6";
import { Context } from "@/store/ContextProvider";

function SignInComponent({ toggleType }: { toggleType: VoidFunction }) {
  const form = useForm({
    initialValues: { email: "", password: "", remember: false },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Passwors must have at least 6 symbols" : null,
    },
  });
  const { store } = useContext(Context);
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
        store.login(values.email, values.password);
      })}
      className="flex flex-col gap-[15px]"
    >
      <h1 className=" text-3xl font-bold text-center">Sign in</h1>
      <p className="text-center text-gray-500">
        Sign in to your account using email and password provided during
        registration.
      </p>
      <TextInput
        label="Your email"
        placeholder="Your email"
        {...form.getInputProps("email")}
      />

      <PasswordInput
        label="Password"
        placeholder="Your password"
        {...form.getInputProps("password")}
      />

      <Checkbox
        label="Remember me"
        color="cyan"
        {...form.getInputProps("remember")}
      />
      <Button type="submit" variant="filled" color="cyan" fullWidth>
        Submit
      </Button>

      <div className="flex gap-[5px]">
        <span>Don't have an account?</span>
        <span onClick={toggleType} className=" text-cyan-800 cursor-pointer ">
          Sign up
        </span>
      </div>
      <div className="w-full bg-gray-300 h-[1px]"></div>
      <span className="text-center text-gray-500">Or sign with</span>
      <div className="flex justify-center">
        <FaSquareFacebook size="30" color="#155E75" />
      </div>
    </form>
  );
}

export default SignInComponent;
