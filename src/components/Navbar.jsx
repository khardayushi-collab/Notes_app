import React from "react";
import imgUrl from "../assets/images/logo.webp"

const Navbar = () => {
  return (
    <>
      <nav id="navBlock">
        <div className="imgBlock">
          <img src={imgUrl} alt="logo" />
        </div>
        <div className="head">
          <h3>Notes app</h3>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
