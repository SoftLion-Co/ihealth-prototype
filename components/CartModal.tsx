"use client";

import React from "react";
import { Drawer } from "@mantine/core";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import Cross from "@/images/vector/CrossGray.svg";

type Props = {};

const CartModal = (props: Props) => {
  const { cartCount, shouldDisplayCart, handleCartClick, cartDetails } =
    useShoppingCart();

  return (
    <Drawer.Root
      opened={true}
      onClose={() => handleCartClick()}
      position="right"
    >
      <Drawer.Overlay />
      <Drawer.Content className="sm:max-w-lg w-[90vw] rounded-l">
        <Drawer.Header className="px-6 pt-8">
          <Drawer.Title className="text-xl font-bold	">
            Your cart (4)
          </Drawer.Title>
          <Drawer.CloseButton className="size-10 bg-transparent hover:bg-transparent">
            <Image
              src={Cross}
              width={24}
              height={24}
              alt="Close"
            />
          </Drawer.CloseButton>
        </Drawer.Header>
        <Drawer.Body className="h-fit flex flex-col justify-between">
          <div className="flex-1">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h2 className="py-6">You don't have any items</h2>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      Hello
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default CartModal;
