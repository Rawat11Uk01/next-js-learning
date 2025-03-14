import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Product",
  },
  description: "This is a product page",
};

export default async function ProductPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error("Error");
  return <div>I m product page</div>;
}
