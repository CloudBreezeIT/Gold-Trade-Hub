import React from "react";
import { stringConcat } from "../functions/helperFuntions";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <>
      <Link to={`/ad-market-place/auction/single-product/${item.slug}`}>
        <div className="border w-[170px] md:w-[213px] xl:w-[280px] rounded-2xl">
          <div className="relative">
            <div className="relative overflow-hidden  rounded-2xl">
              <img
                src={
                  item.img == null
                    ? `/assets/images/alt-img.webp`
                    : `${item.img}`
                }
                className="w-full h-[200px] md:h-[250px] xl:h-[17.6rem] transition-transform duration-500 ease-in-out hover:scale-110"
                alt={item.name}
              />
            </div>
            {/* <div className="absolute top-2 right-2 w-6 h-6  md:w-8 md:h-8 xl:w-9 xl:h-9 z-10 flex jus items-center justify-center cursor-pointer">
            <div
              className={`rating gap-1 p-[6px] bg-[#1983FF33] rounded-full ${
                isHeartFilled
                  ? "text-blue-500 duration-500 ease-in-out"
                  : "text-white"
              }`}
              onClick={handleHeartClick}
            >
              <FaHeart className="md:h-5 md:w-5 h-4 w-4 cursor-pointer" />
            </div>
          </div> */}
          </div>

          <div className="px-3 flex flex-col gap-1">
            <h2 className="font-semibold text-[11px] md:text-sm xl:text-base mt-2">
              {stringConcat(item.name, 23)}
            </h2>

            <div className="flex justify-between items-end">
              <div>
                <div className="text-sm text-[#828282]">
                  {item.city},{item.country}
                </div>
                <div className="text-sm text-[#828282]">{item.date}</div>
              </div>
              <div className="text-[17px] md:text-[21px] xl:text-2xl font-semibold leading-5">
                {/* ${formatNumber(item.price)} */}${item.price}
              </div>
              <p className="text-[10px] md:text-xs xl:text-sm font-bold tracking-wide">
                {item.data}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
