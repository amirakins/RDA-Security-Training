import React from "react";
import headshot from "../assets/headshot.png";

function AboutMe() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">About Me</h1>
        
        <div class="row g-0">
      <div class="col-6 col-md-4"><img src={headshot} className="d-block w-50 m-auto" alt="headshot" /></div>
  <div class="col-sm-6 col-md-8">
    <strong>
      <p className="py-2">Master Instructor Certification through the Georgia Peace Officer Standards and Training Council</p>
      <p className="py-2">Firearms Instructor Certification through the Georgia Peace Officer Standards and Training Council</p>
      <p className="py-2">Defensive Tactics Instructor through the Georgia Department of Community Supervision</p>
      <p className="py-2">Use of Force Instructor through the Georgia Peace Officer Standards and Training Council</p>
      </strong>
  </div>
</div>
        <div className="container">
          <p>
            Rodney D. Akins brings a wealth of experience from three decades of
            service in both military and law enforcement. Rodney has trained
            with some of the best instructors in the country. His experience
            includes working with the U.S. Air Force, Federal Air Marshal
            Service, Georgia State Board of Pardons and Paroles, and the Georgia
            Department of Community Supervision, where he is currently the
            supervisor of the Advanced & Specialized Training Unit.
          </p>
          <p>
            With a passion for teaching, Rodney emphasizes the importance of
            being vigilant and prepared in any situation, following his personal
            motto: “Watch & Pray.” Train with an instructor who has hundreds of
            hours of specialized training in firearms, defensive tactics, and
            more. Prepare for the unexpected with expert guidance and hands-on
            experience. Sign up today and start building your marksmanship
            skills!
          </p>
        </div>

       
        
      </div>
    </>
  );
}

export default AboutMe;
