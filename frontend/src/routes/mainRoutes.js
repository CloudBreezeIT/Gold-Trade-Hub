import React from "react";
import Root from "../pages/Root";
import homePageRoutes from "./homePageRoutes";
import authRoutes from "./authRoutes";
import ProtectedRoute from "../ProtectedRoute";
import userDashboardRoutes from "./userDashboardRoutes";


const mainRoutes = [
  {
    path: "/",
    element: <Root/>,
    children: [
        ...homePageRoutes,
        ...authRoutes,
        {
          path: "/user-dashboard/",
          element: <ProtectedRoute />, // Protect this route and its children
          children: [
              ...userDashboardRoutes
            // {
            //   path: "*", // Catch all unmatched routes
            //   element: <FourOFourPage />, // Render the NotFound component
            // },
          ],
        },
    ],
  },
];

export default mainRoutes;
