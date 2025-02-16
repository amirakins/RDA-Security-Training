import React from "react";
import logo from "../assets/logo.PNG";

function Logo() {
  return (
    <>
      <div class="container overflow-hidden text-center">
        <img src={logo} class="d-block w-10 m-auto" alt="logo" />
      </div>
    </>
  );
}

export default Logo;
