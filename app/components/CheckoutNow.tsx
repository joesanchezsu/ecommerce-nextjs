"use client";

import { ProductCart } from "@/app/components/AddToBag";
import { urlFor } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";

export default function CheckoutNow(props: ProductCart) {
  const { name, description, price, currency, image, price_id } = props;
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (priceId: string) => {
    checkoutSingleItem(priceId);
  };

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
      variant={"secondary"}
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}
