import React from 'react'
import Accordian from './Accordian';

function BulletPoints() {
  return (
    <>
      <div className="container py-3">
        <h1 className='text-center'>What You'll Learn</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <Accordian heading="Firearm Safety" info="Learn the critical safety protocols to keep yourself and others safe." target={"flush-collapseOne"}/>
          <Accordian heading="Firearm Handing" info="Master the fundamentals of safe and effective handling of your weapon." target={"flush-collapseTwo"}/>
          <Accordian heading="Use of Force Law" info="Understand the legal rights and responsibilities you have when using a firearm." target={"flush-collapseThree"}/>
          <Accordian heading="Concealed Carry Law" info="Get familiar with the regulations surrounding carrying a firearm in public." target={"flush-collapseFour"}/>
          <Accordian heading="Marksmanship Techniques" info="Learn proven techniques to improve your shooting accuracy." target={"flush-collapseFive"}/>
          <Accordian heading="Live Fire Practice" info="Experience live fire training at a professional shooting range." target={"flush-collapseSix"}/>
        </div>
      </div>
    </>
  );
}

export default BulletPoints
