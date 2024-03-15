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
      opened={shouldDisplayCart as boolean}
      onClose={() => handleCartClick()}
      position="right"
    >
      <Drawer.Overlay />
      <Drawer.Content className="sm:max-w-lg w-[90vw] rounded-l">
        <Drawer.Header className="px-6 pt-8">
          <Drawer.Title className="text-xl font-bold	">
            Your cart ({cartCount})
          </Drawer.Title>
          <Drawer.CloseButton className="size-10 bg-transparent hover:bg-transparent">
            <Image src={Cross} width={24} height={24} alt="Close" />
          </Drawer.CloseButton>
        </Drawer.Header>
        <Drawer.Body className="h-fit flex flex-col justify-between p-0">
          <div className="flex-1">
            {cartCount === 0 ? (
              <h2 className="py-6">You don't have any items</h2>
            ) : (
              <ul className="-my-6 divide-y divide-gray-200">
                {Object.values(cartDetails ?? {}).map((entry) => (
                  <li key={entry.id} className="">
                    <div className="px-6 py-4">
                      {entry.image && (
                        <Image
                          src={entry.image}
                          width={80}
                          height={80}
                          alt="Product image"
                        />
                      )}
                      <h3>{entry.name}</h3>
                      {entry.product_data && (
                        
                        <h3>{entry.product_data.options[0].value}</h3>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default CartModal;
