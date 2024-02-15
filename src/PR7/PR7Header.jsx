import React from "react";
import { Link } from "react-router-dom";

export default function PR7Header() {
  return (
    <div>
      <Link to={"/PR7"} className="">
        Home
      </Link>
      <Link to={"/PR7/PR7Add"} className="">
        Add Products
      </Link>
    </div>
  );
}
