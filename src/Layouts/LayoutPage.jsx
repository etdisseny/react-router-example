import React from "react";
import { Outlet } from "react-router-dom";

export const LayoutPage = () => {
  return (
    <div className="container py-4">
      <Outlet />
    </div>
  );
};
