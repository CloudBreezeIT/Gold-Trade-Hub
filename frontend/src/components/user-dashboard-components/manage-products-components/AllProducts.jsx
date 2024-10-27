import React, { useEffect } from "react";
import BreadCrums from "../../../common/BreadCrums";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/userSlice";

export default function AllProducts() {
    const dispatch = useDispatch();
    const { loading, message, error, data, statusCode } = useSelector(
      (state) => state.user
    );

    useEffect(() => {
        dispatch(getProducts());
      }, []);

      

  return (
    <>
      <div className="">
        <div className="flex justify-between  items-center py-5">
          <BreadCrums
            breadCrum={[
              {
                name: "User Dashboard",
                // path: "/admin-dashboard/",
              },
              {
                name: "Manage Products",
                // path: "/admin-dashboard/manage-companies",
              },
              //   {
              //     name: "Add Products",
              //     // path: "/admin-dashboard/manage-companies/add-company",
              //   },
            ]}
          />
          <Link
            className="rounded-md font-semibold text-xs md:text-sm py-2 px-3 md:px-3 md:py-2 hover:opacity-75 text-white bg-yellow-500"
            to="add-product"
          >
            Add Product
          </Link>
        </div>
        <div className="relative flex items-center w-full">
          <img
            src="/assets/icons/search.svg"
            alt=""
            className="absolute left-3 text-[#C19A6B]"
          />
          <input
            className="w-full py-2 md:py-2 pl-10 rounded-lg bg-white border border-[#EBF0ED] focus:outline-none text-[#6B6B6B] font-[500] text-[14px]"
            type="search"
            placeholder="Search Products"
          />
        </div>
      </div>
    </>
  );
}
