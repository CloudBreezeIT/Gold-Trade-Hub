import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BreadCrums from "../../common/BreadCrums";
import SidebarFilter from "../../components/Search-page-components/SidebarFilter";
import ProductCard from "../../common/ProductCard";
import { getRequest } from "../../Requests/Request";
import MainSearchBar from "../../common/MainSearchBar";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("q");

  const fetchProducts = async (query) => {
    setLoading(true);
    try {
      const response = await getRequest(`product/search?q=${query}`);
      setProducts(response?.body || []);
      console.log("ds",response)
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  return (
    <>
      <div className="mt-44">
        {/* Main Search Bar */}
        <div className="fixed left-0 right-0 top-2">
          {/* <MainSearchBar onSearch={fetchProducts} /> */}
        </div>
        <div className="mx-20 my-10">
          <BreadCrums
            breadCrum={[
              {
                name: "Home",
                path: "/",
              },
              {
                name: "Search Results",
              },
            ]}
          />

          <div className="flex justify-between">
            <div className="w-[25%] flex items-start">
              <SidebarFilter />
            </div>

            <div className="w-[75%] flex flex-wrap gap-3 items-start">
              {loading ? (
                <p className="text-center mx-auto">Loading products...</p>
              ) : products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product._id} item={product} />
                ))
              ) : (
                <p className="mx-auto my-auto">No Products found for this....</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
