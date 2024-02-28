"use client";

import { urlFor } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag(props: ProductCart) {
  const { name, description, price, currency, image, price_id } = props;
  console.log({ price_id });
  const { addItem, handleCartClick } = useShoppingCart();
  const product: Product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to Cart
    </Button>
  );
}
