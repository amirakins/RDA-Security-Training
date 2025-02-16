import React from "react";
import { Outlet, Link } from "react-router-dom";

function DoubleButton() {
  return (
    <>
      <div class="d-grid gap-2 col-6 mx-auto">
        <Link class="btn btn-primary" type="button" to="/waiver">
          Waiver
        </Link>
        <Link class="btn btn-primary" type="button" to="/payment">
          Payment
        </Link>
      </div>
    </>
  );
}

export default DoubleButton;
