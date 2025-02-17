import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        <div class="d-grid gap-2 container">
          <Link class="link-dark text-center " to="/privacy">
            Privacy
          </Link>
        </div>

        <div class="container text-center">
          Copyrights &copy; RDA Security Training LLC
        </div>
      </footer>
    </>
  );
}

export default Footer;
