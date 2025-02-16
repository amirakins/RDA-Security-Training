import React from "react";
import headshot from "../assets/headshot.png";

function AboutMe() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">About Me</h1>
        <img src={headshot} className="d-block w-25 m-auto" alt="headshot" />
        <br/>
        <strong>
            <div class="row align-items-start">
              <div class="col">Expert Marksman through the U.S. Air Force</div>
              <div class="col">
                Master Instructor Certification through the Georgia Peace
                Officer Standards and Training Council
              </div>
              <div class="col">
                Firearms Instructor Certification through the Georgia Peace
                Officer Standards and Training Council
              </div>
            </div>
          
          <br />
            <div class="row align-items-start">
              <div class="col">
                Expert Marksman through the Georgia Peace Officer Standards and
                Training Council
              </div>
              <div class="col">
                Defensive Tactics Instructor through the Georgia Department of
                Community Supervision
              </div>
              <div class="col">
                Use of Force Instructor through the Georgia Peace Officer
                Standards and Training Council
              </div>
            </div>
        </strong>
        <br />

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
