import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Product",
  },
  description: "This is a product page",
};

export default function ProductPage() {
  return <div>I m product page</div>;
}
