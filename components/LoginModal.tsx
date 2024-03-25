import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect } from "react";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";

interface Props {
  type: "none" | "signup" | "signin";
  setType: React.Dispatch<React.SetStateAction<"none" | "signup" | "signin">>;
}

function LoginModal({ type, setType }: Props) {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (type !== "none") open();
  }, [type]);

  return (
    <Modal
      opened={opened}
      onClose={() => {
        close();
        setTimeout(() => {
          setType("none");
        }, 100);
      }}
    >
      {type === "signin" && (
        <SignInComponent
          toggleType={() => {
            setType("signup");
          }}
        />
      )}
      {type === "signup" && (
        <SignUpComponent
          toggleType={() => {
            setType("signin");
          }}
        />
      )}
    </Modal>
  );
}

export default LoginModal;
