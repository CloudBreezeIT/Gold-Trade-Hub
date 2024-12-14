import React, { useEffect, useState } from "react";
import { getRequest } from "../../Requests/Request";
import ProductCard from "../../common/ProductCard";

const RelatedProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRequest("/product/get-homepage-products");
        // Flatten all products into a single array
        const products = res.body.flatMap((item) => item.products);
        setAllProducts(products); // Set all products in a single array
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className=" my-16">
      <div className="mt-10 px-4 lg:px-8 xl:px-[67px]">
        {/* Section Header */}
        <div className="mb-5">
          <h2 className="text-2xl text-gray-800 relative">
            Related Products
            <span className="absolute -bottom-2 left-0 w-[7%] h-[0.145rem] bg-yellow-500 rounded-full"></span>
          </h2>
        </div>
      </div>


      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-4 px-4 lg:px-8   max-w-screen-xl mx-auto">

        {allProducts.slice(-5).map((product) => (
          <div  key={product._id}>
            <ProductCard item={product} />
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default RelatedProducts;
