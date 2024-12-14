import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import MainSearchBar from "../common/MainSearchBar";

export default function Root() {
  return (
    <>
      <main>
        <Navbar />
        <MainSearchBar />
        <div className="flex w-full flex-col">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Outlet />
        </div>
      </main>
    </>
  );
}
