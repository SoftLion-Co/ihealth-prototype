import { Context } from "@/store/ContextProvider";
import {
  Button,
  Checkbox,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { values } from "mobx";
import React, { useContext, useEffect } from "react";

function SignUpComponent({ toggleType }: { toggleType: VoidFunction }) {
  const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      verify: "",
      remember: false,
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must have at least 6 characters" : null,
      verify: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const { store } = useContext(Context);
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
        const names = values.name.split(" ");
        store.registration(
          names[0] || " ",
          names[1] || " ",
          values.email,
          values.password
        );
      })}
      className="flex flex-col gap-[15px]"
    >
      <h1 className=" text-3xl font-bold text-center">Sign up</h1>
      <p className="text-center text-gray-500">
        Registration takes less than a minute but gives you full control over
        your orders.
      </p>
      <TextInput
        label="Full name"
        placeholder="Your full name"
        {...form.getInputProps("name")}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        {...form.getInputProps("email")}
      />

      <Stack>
        <PasswordInput
          label="Password"
          placeholder="Your password"
          visible={visible}
          onVisibilityChange={toggle}
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Confirm password"
          placeholder="Confirm password"
          visible={visible}
          onVisibilityChange={toggle}
          {...form.getInputProps("verify")}
        />
      </Stack>
      <Checkbox
        label="Remember me"
        color="cyan"
        {...form.getInputProps("remember")}
      />
      <Button variant="filled" color="cyan" fullWidth type="submit">
        Submit
      </Button>

      <div className="flex gap-[5px]">
        <span>Already have an account? </span>
        <span onClick={toggleType} className=" text-cyan-800 cursor-pointer ">
          Sign in
        </span>
      </div>

      <div className="w-full bg-gray-300 h-[1px]"></div>
      <span className="text-center text-gray-500">Or sign with</span>
    </form>
  );
}

export default SignUpComponent;
