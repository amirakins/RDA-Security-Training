import React from 'react'

function CourseBreakdown() {
  return (
    <>
      <div className="container px-4">
        <h1 className='text-center'>Course Breakdown</h1>
        <div className="row gx-5">
          <div className="col">
           <div className="p-3">
            <h5 className="card-title">Day 1: Online/classroom Instruction (1hr)</h5>
            <p className="card-text">Get a solid foundation in firearm safety, legal considerations, and marksmanship concepts in a comfortable, interactive online environment.</p>        
           </div>
          </div>
          <div className="col">
            <div className="p-3">
                <h5 className="card-title">Day 2: Live Fire Instruction (2hrs)</h5>
                <p className="card-text">Put your learning to the test with hands-on live fire training at a fully equipped range.</p>        
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default CourseBreakdown
