import React, { useEffect, useState } from "react";
import { getRequest } from "../../Requests/Request";
import ProductCard from "../../common/ProductCard";

const FullSet = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRequest("/product/full-set");

        console.log(res);
        setData(res.body);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="mt-10 px-4 lg:px-8  xl:px-[67px]">
        <div className="mb-5">
          <h2 className="text-2xl text-gray-800 relative">
            Browse Full Groom Set
            <span className="absolute -bottom-2 left-0 w-[7%] h-[0.145rem] bg-yellow-500 rounded-full"></span>
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-9 xl:gap-7 px-4 lg:px-8  xl:px-[67px]">
        {data &&
          data?.slice(0, 4).map((product) => (
            <div
              // to={`/${product.slug}`}
              className="flex-none"
              key={product._id}
            >
              <ProductCard item={product} />
            </div>
          ))}
      </div>
    </>
  );
};

export default FullSet;
