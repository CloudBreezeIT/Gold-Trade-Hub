import React from "react";
import SingleProductOverview from "../../components/single-product-page-components/SingleProductOverview";
import RelatedProducts from "../../components/single-product-page-components/RelatedProducts";

export default function SingleProductPage() {
  return (
    <>
      <SingleProductOverview />
      <RelatedProducts />
    </>
  );
}
