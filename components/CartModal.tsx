"use client";

import React, { useState } from "react";
import { ActionIcon, Group, NumberInput } from "@mantine/core";
import { Drawer } from "@mantine/core";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import Cross from "@/images/vector/CrossGray.svg";
import wishFilled from "@/images/navigation/WishFilled.svg";
import wishOutline from "@/images/navigation/WishOutline.svg";
import deleteIcon from "@/images/goods/Delete.svg";
import ButtonComponent from "./ButtonComponent";

interface CartEntry {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  product_data?: {
    options?: { [key: string]: string };
    oldPrice?: number;
  };
}

const CartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    setItemQuantity,
    removeItem,
    totalPrice,
  } = useShoppingCart();

  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setItemQuantity(id, newQuantity);
  };

  const handleDecrement = (id: string) => {
    if (cartDetails && cartDetails[id]) {
      const newQuantity = Math.max(cartDetails[id].quantity - 1, 1);
      handleQuantityChange(id, newQuantity);
    }
  };

  const handleIncrement = (id: string) => {
    if (cartDetails && cartDetails[id]) {
      const newQuantity = cartDetails[id].quantity + 1;
      handleQuantityChange(id, newQuantity);
    }
  };

  const toggleWishlist = (id: string) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <Drawer.Root
      opened={shouldDisplayCart as boolean}
      onClose={() => handleCartClick()}
      position="right"
      size={"352px"}
    >
      <Drawer.Overlay />
      <Drawer.Content className="rounded-l flex flex-col">
        <Drawer.Header className="px-6 pt-8 border-b border-gray-200 pb-6">
          <Drawer.Title className="text-xl font-bold">
            Your cart ({cartCount})
          </Drawer.Title>
          <Drawer.CloseButton className="size-6 hover:bg-gray-200 transition">
            <Image src={Cross} width={24} height={24} alt="Close" />
          </Drawer.CloseButton>
        </Drawer.Header>
        <Drawer.Body className="flex-grow p-0">
          <div className="flex-1 overflow-y-auto">
            {cartCount === 0 ? (
              <h2 className="py-6 px-6">Your cart is empty</h2>
            ) : (
              <ul className="divide-y divide-gray-200">
                {Object.values<CartEntry>((cartDetails as any) || {})
                  .map((entry: CartEntry) => (
                    <li key={entry.id}>
                      <div className="px-3 lg:px-6 py-4 flex justify-between gap-2 sm:gap-3 items-start">
                        <div className="flex gap-2 sm:gap-3">
                          {entry.image && (
                            <Image
                              src={entry.image}
                              width={80}
                              height={80}
                              alt="Product image"
                              className="max-w-20 max-h-20 object-contain"
                            />
                          )}
                          <div className="flex flex-col max-w-[180px]">
                            <h3 className="text-[#1e212c] font-bold text-sm mb-1 line-clamp-2">
                              {entry.name}
                            </h3>
                            <div className="mb-3">
                              {entry.product_data &&
                                entry.product_data.options &&
                                Object.entries(entry.product_data.options).map(
                                  ([key, value], index) => (
                                    <p
                                      key={index}
                                      className="text-xs text-[#424551]"
                                    >
                                      <span className="text-[#787A80]">
                                        {key}:
                                      </span>{" "}
                                      {String(value)}
                                    </p>
                                  )
                                )}
                            </div>
                            <div className="flex items-center gap-2 sm:gap-4">
                              <NumberInput
                                type="number"
                                value={entry.quantity}
                                onChange={(value: number) =>
                                  handleQuantityChange(entry.id, value)
                                }
                                max={100}
                                min={1}
                                classNames={{
                                  control:
                                    "border-none before:hidden after:hidden",
                                  input:
                                    "focus:border-primary w-[64px] text-xs",
                                }}
                                className="hidden lg:block"
                              />
                              <Group
                                spacing={2}
                                className="flex flex-nowrap lg:hidden"
                              >
                                <ActionIcon
                                  size={36}
                                  variant="default"
                                  onClick={() => handleDecrement(entry.id)}
                                  disabled={entry.quantity <= 1}
                                >
                                  –
                                </ActionIcon>

                                <NumberInput
                                  hideControls
                                  value={entry.quantity}
                                  onChange={(value: number) =>
                                    handleQuantityChange(entry.id, value)
                                  }
                                  max={100}
                                  min={1}
                                  classNames={{
                                    input: "text-center w-[36px] text-base p-0",
                                    label: "!p-0 !m-0",
                                  }}
                                />

                                <ActionIcon
                                  size={36}
                                  variant="default"
                                  onClick={() => handleIncrement(entry.id)}
                                  disabled={entry.quantity >= 100}
                                >
                                  +
                                </ActionIcon>
                              </Group>
                              <div className="flex gap-1 items-center flex-wrap">
                                {entry.product_data && (
                                  <span
                                    className={`${
                                      entry.product_data.oldPrice
                                        ? "text-danger"
                                        : "text-[#1E212C]"
                                    } font-bold`}
                                  >
                                    ${(entry.price * entry.quantity).toFixed(2)}
                                  </span>
                                )}
                                {entry.product_data &&
                                  entry.product_data.oldPrice && (
                                    <span className="text-xs line-through text-[#787A80]">
                                      $
                                      {(
                                        entry.product_data.oldPrice *
                                        entry.quantity
                                      ).toFixed(2)}
                                    </span>
                                  )}
                              </div>
                            </div>

                            <button
                              className="flex items-center text-xs leading-9 text-[#424551] tracking-wide group w-fit"
                              onClick={() => toggleWishlist(entry.id)}
                            >
                              <span className="lg:group-hover:text-gray-400">
                                {wishlist.includes(entry.id)
                                  ? "In wishlist"
                                  : "Move to"}
                              </span>
                              <Image
                                src={
                                  wishlist.includes(entry.id)
                                    ? wishFilled
                                    : wishOutline
                                }
                                alt="Wishlist"
                                width={16}
                                height={16}
                                className="m-2 w-4 h-4 lg:group-hover:scale-125 transition"
                              />
                            </button>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(entry.id)}
                          className="flex shrink-0"
                        >
                          <Image
                            src={deleteIcon}
                            alt="Remove from cart"
                            width={16}
                            height={16}
                            className="w-4 lg:hover:scale-110 transition"
                          />
                        </button>
                      </div>
                    </li>
                  ))
                  .reverse()}
              </ul>
            )}
          </div>
        </Drawer.Body>

        <div className="py-4 px-6 border-t border-gray-200">
          <div className="flex justify-between items-center text-[#787A80] mb-5">
            Subtotal:{" "}
            <span className="text-[#1E212C] font-bold text-xl">
              ${totalPrice?.toFixed(2)}
            </span>
          </div>
          <ButtonComponent
            text="Checkout"
            typeButton="CheckoutButton"
            className="w-full"
          />
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default CartModal;
