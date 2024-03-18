"use client";

import React, { useState } from "react";
import { NumberInput } from "@mantine/core";
import { Drawer } from "@mantine/core";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import Cross from "@/images/vector/CrossGray.svg";
import wishFilled from "@/images/navigation/WishFilled.svg";
import wishOutline from "@/images/navigation/WishOutline.svg";
import deleteIcon from "@/images/goods/Delete.svg";

type Props = {};

const CartModal = (props: Props) => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    setItemQuantity,
    removeItem,
  } = useShoppingCart();

  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setItemQuantity(id, newQuantity);
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
              <ul className=" divide-y divide-gray-200">
                {Object.values(cartDetails ?? {}).map((entry) => (
                  <li key={entry.id} className="">
                    <div className="px-6 py-4 flex justify-between gap-3 items-start">
                      <div className="flex gap-4">
                        {entry.image && (
                          <Image
                            src={entry.image}
                            width={80}
                            height={80}
                            alt="Product image"
                            className="size-20 object-contain"
                          />
                        )}
                        <div className="flex flex-col">
                          <h3 className="text-[#1e212c] font-bold text-sm mb-1">
                            {entry.name}
                          </h3>
                          <div className="mb-3">
                            <p className="text-xs text-[#424551]">
                              <span className="text-[#787A80]">Taste:</span>{" "}
                              Шоколад
                            </p>
                            <p className="text-xs text-[#424551]">
                              <span className="text-[#787A80]">Weight:</span>{" "}
                              1000г
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <NumberInput
                              value={entry.quantity}
                              onChange={(value: number) =>
                                handleQuantityChange(entry.id, value)
                              }
                              max={100}
                              min={1}
                              className="max-w-[72px] before:hidden after:hidden"
                              color="red"
                              classNames={{
                                control: "border-none",
                                input: "focus:border-primary",
                              }}
                            />
                            <div className="flex gap-1 items-center">
                              {" "}
                              <span
                                className={`${
                                  entry.product_data.oldPrice
                                    ? "text-danger"
                                    : "text-[#1E212C]"
                                } font-bold`}
                              >
                                {entry.price}
                              </span>
                              {entry.product_data.oldPrice && (
                                <span className="text-xs line-through text-[#787A80]">
                                  {entry.product_data.oldPrice}
                                </span>
                              )}
                            </div>
                          </div>

                          {wishlist.includes(entry.id) ? (
                            <span className=" text-gray-500 text-xs leading-9">
                              In wishlist
                            </span>
                          ) : (
                            <button
                              className="flex items-center text-xs leading-9 text-[#424551] tracking-wide	"
                              onClick={() => toggleWishlist(entry.id)}
                            >
                              <span>Move to</span>
                              <Image
                                src={
                                  wishlist.includes(entry.id)
                                    ? wishFilled
                                    : wishOutline
                                }
                                alt="Wishlist"
                                width={16}
                                height={16}
                                className="m-2 w-4 h-4"
                              />
                            </button>
                          )}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(entry.id)}
                        className="font-md text-primary hover:text-primary/80"
                      >
                        <Image
                          src={deleteIcon}
                          alt="Remove from cart"
                          width={16}
                          height={16}
                        />
                      </button>
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
