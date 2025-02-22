import React from "react";
import Sub from "./Sub";
import Glock from "../assets/glock.jpg";
import Ar15 from "../assets/ar15.jpg";
import CourseCard from "./CourseCard";

function BookClass() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Book A Class</h1>
        <Sub />

        <CourseCard
        link="/waiver"
        img={Glock}
        name="Fundamentals of Marksmanship"
        desc="This is a comprehensive basic handgun course designed for those who want to come away with a complete foundation of knowledge regarding the safe handling of handguns and basic marksmanship skills. 
        This course includes a solid foundation of fundamental marksmanship skills and safe firearm handling practices."
        who="Those who have little to no experience with firearms are ideal candidates for this course as are those who want an in-depth introduction to safe firearm handling and enough practice to leave the course with confidence in your handling skill of a firearm."
        price="$125"
      />
      <CourseCard
        link="/waiver"
        img={Ar15}
        name="Basic Rifle Marksmanship"
        desc="This course is structured to teach the essential skills and knowledge required to handle a rifle safely. 
        Participants will learn key concepts such as proper rifle handling, aiming techniques, shooting stances, and basic rifle maintenance."
        who="This course is ideal for individuals with little to no prior experience with rifles who wish to gain a solid understanding of how to use them effectively and safely."
        price="$125"
      />
        
      </div>
    </>
  );
}

export default BookClass;
