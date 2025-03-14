import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Product",
  },
  description: "This is a product page",
};

const generateRandomNumber = (number: number) => {
  return Math.floor(Math.random() * number);
};

export default async function ProductPage() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const randomNumber = generateRandomNumber(10);
  if (randomNumber > 5) {
    throw new Error(`Error ${randomNumber}`);
  }

  return <div>I m product page</div>;
}
