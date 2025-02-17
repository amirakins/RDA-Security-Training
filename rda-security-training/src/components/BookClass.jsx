import React from "react";
import Sub from "./Sub";
import glock from "../assets/glock.jpg";
import ar15 from "../assets/ar15.jpg";
import { Link } from 'react-router-dom';

function BookClass() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Book A Class</h1>
        <Sub />

        <Link className="link-offset-2 link-underline link-underline-opacity-0" to="/waiver">
        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src={glock} class="img-fluid rounded-start" alt="handgun" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Fundamentals of Marksmanship</h5>
                <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    $125
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        </Link>
        <Link className="link-offset-2 link-underline link-underline-opacity-0" to="/waiver">
        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src={ar15} class="img-fluid rounded-start" alt="rifle" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Basic Rifle Marksmanship</h5>
                <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    $125
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
}

export default BookClass;
