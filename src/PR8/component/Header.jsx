import React from "react";
import { Link } from "react-router-dom";
import Style from "../styles/Style.module.css";

export default function Header() {
  return (
    <div>
      <div>
        <Link className="mx-5" to={"/pr7/"}>
          Home
        </Link>
        <Link className="me-5" to={"/pr7/add"}>
          ADD
        </Link>
        {/* <Link className="me-5" to={`/edit`}>
        EDIT
      </Link> */}
      </div>
    </div>
  );
}
