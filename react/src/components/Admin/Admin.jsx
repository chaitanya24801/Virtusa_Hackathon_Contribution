import React, { useState } from "react";
import Navigation from "./Navigation";
import Products from "./Products";
import Orders from "./Orders";

const Admin = () => {
  const [activeElement, setActiveElement] = useState("products");

  return (
    <>
      <Navigation {...{ activeElement, setActiveElement }} />
      <div className="admin-main">
        {activeElement === "products" ? <Products /> : <Orders />}
      </div>
    </>
  );
};

export default Admin;
