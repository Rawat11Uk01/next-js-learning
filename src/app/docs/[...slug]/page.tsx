import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log(slug);
  return <div>i am slug page</div>;
}
