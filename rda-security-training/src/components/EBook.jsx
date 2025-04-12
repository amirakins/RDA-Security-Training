import React from "react";
import Sub from "./Sub";
import Ebook from "../assets/ebook.png";
import VertCard from "./VertCard";

function EBook() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Free E-Book</h1>
        
        <div class="col d-flex justify-content-center align-items-center">
    <VertCard
        link="https://page.co/h8hcv"
        img={Ebook}
        name="Firearm Saftey 101 E-Book"
        desc="Learn the critical safety rules, responsible handling practices, and expert tips that every gun owner should know to master the Basics of Firearm Safety."
        price="Free"
      />
    </div>
        
      </div>
    </>
  );
}

export default EBook;
