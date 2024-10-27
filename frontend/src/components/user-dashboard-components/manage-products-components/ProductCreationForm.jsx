import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select"; // Importing react-select
import { clearMessage, productPost } from "../../../store/userSlice";
import { toast } from "react-toastify";
import BreadCrums from "../../../common/BreadCrums";

export default function ProductCreationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, message, error, statusCode } = useSelector(
    (state) => state.user
  );

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: null, // Dropdown value
    category: null, // Dropdown value
    subcategory: null, // Dropdown value
    images: [], // Array of images
  });

  const locationOptions = [
    { value: "New York", label: "New York" },
    { value: "San Francisco", label: "San Francisco" },
    { value: "Los Angeles", label: "Los Angeles" },
  ];

  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "home-appliances", label: "Home Appliances" },
  ];

  const subcategoryOptions = {
    electronics: [
      { value: "mobile-phones", label: "Mobile Phones" },
      { value: "laptops", label: "Laptops" },
    ],
    fashion: [
      { value: "men-clothing", label: "Men's Clothing" },
      { value: "women-clothing", label: "Women's Clothing" },
    ],
    "home-appliances": [
      { value: "kitchen", label: "Kitchen Appliances" },
      { value: "laundry", label: "Laundry Appliances" },
    ],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLocationChange = (selectedOption) => {
    setFormData({ ...formData, location: selectedOption });
  };

  const handleCategoryChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      category: selectedOption,
      subcategory: null, // Reset subcategory when category changes
    }));
  };

  const handleSubcategoryChange = (selectedOption) => {
    setFormData({ ...formData, subcategory: selectedOption });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.images.length <= 10) {
      setFormData({ ...formData, images: [...formData.images, ...files] });
    }
  };

  const handleImageDelete = (indexToDelete) => {
    setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, index) => index !== indexToDelete),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("location", formData.location?.value || "");
    data.append("category", formData.category?.value || "");
    data.append("subCategory", formData.subcategory?.value || "");

    // Append images to the FormData object
    formData.images.forEach((image) => {
      data.append("images", image);
    });

    dispatch(productPost(data));
  };

  useEffect(() => {
    if (statusCode === 201) {
      toast.success(message);
      navigate(-1);
    }
    if (error) {
      toast.error(error);
    }
    dispatch(clearMessage());
  }, [loading, message, error]);

  return (
    <>
      <div className="">
        <div className="flex justify-between  items-center py-5">
          <BreadCrums
            breadCrum={[
              {
                name: "User Dashboard",
                path: "/user-dashboard/manage-products",
              },
              {
                name: "Manage Products",
                path: "/user-dashboard/manage-product",
              },
                {
                  name: "Add Products",
                  // path: "/admin-dashboard/manage-companies/add-company",
                },
            ]}
          />
        </div>
      </div>
      <div className="w-full bg-white rounded-xl p-3 mb-4 border-l-4 border-usetheme">
        <h1 className="text-[#18120F] text-lg font-semibold p-1">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex flex-col gap-2">
            {/* Title */}
            <div>
              <label className="text-[#6B6B6B] text-[12px] font-semibold">
                Product Title
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-[#FAFAFA] text-xs font-normal text-[#6B6B6B] rounded-lg w-full py-2 px-2 border border-[#EBF0ED] outline-none"
                type="text"
                placeholder="Enter product title"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-[#6B6B6B] text-[12px] font-semibold">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="bg-[#FAFAFA] text-xs font-normal text-[#6B6B6B] rounded-lg w-full py-2 px-2 border border-[#EBF0ED] outline-none"
                placeholder="Enter product description"
                rows="3"
              />
            </div>

            {/* Location Dropdown */}
            <div>
              <label className="text-[#6B6B6B] text-[12px] font-semibold">
                Location
              </label>
              <Select
                name="location"
                value={formData.location}
                onChange={handleLocationChange}
                options={locationOptions}
                className="text-xs"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="text-[#6B6B6B] text-[12px] font-semibold">
                Category
              </label>
              <Select
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
                options={categoryOptions}
                className="text-xs"
              />
            </div>

            {/* Subcategory Dropdown */}
            {formData.category && (
              <div>
                <label className="text-[#6B6B6B] text-[12px] font-semibold">
                  Subcategory
                </label>
                <Select
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleSubcategoryChange}
                  options={subcategoryOptions[formData.category.value] || []}
                  className="text-xs"
                />
              </div>
            )}

            {/* Image Upload */}
            <div>
              <label className="text-[#6B6B6B] text-[12px] font-semibold">
                Upload Images (Max 10)
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
                id="image-upload"
              />
              <div className="flex flex-wrap gap-2">
                {formData.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-20 h-20 bg-gray-100 border rounded-md overflow-hidden"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`product-${index}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleImageDelete(index)}
                      className="absolute top-0 right-0 p-1 text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}

                {formData.images.length < 10 && (
                  <label
                    htmlFor="image-upload"
                    className="w-20 h-20 bg-gray-200 border-dashed border-2 border-gray-300 flex items-center justify-center cursor-pointer rounded-md"
                  >
                    <span className="text-sm text-gray-500">+</span>
                  </label>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white bg-yellow-500 hover:opacity-75 text-xs h-10 font-semibold py-2 px-3 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
