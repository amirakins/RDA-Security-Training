import React from "react";
import logo from "../assets/logo.PNG";
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
      <div class="container overflow-hidden text-center">
        <Link to="/"><img src={logo} class="d-block w-10 m-auto py-3" alt="logo" /></Link>
      </div>
    </>
  );
}

export default Logo;
