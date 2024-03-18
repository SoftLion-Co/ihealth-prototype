import { TextInput, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const ProfileSection = () => {
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
  return (
    <section className="grid grid-cols-2 gap-[15px] col-span-4 col-end-8">
      <h1 className="col-span-2 ">My Profile</h1>
      <TextInput
        label="First name"
        placeholder="Your full name"
        {...form.getInputProps("name")}
      />
      <TextInput
        label="Last name"
        placeholder="Your email"
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Email"
        placeholder="Your full name"
        {...form.getInputProps("name")}
      />
      <TextInput
        label="Phone"
        placeholder="Your email"
        {...form.getInputProps("email")}
      />
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
    </section>
  );
};

export default ProfileSection;
