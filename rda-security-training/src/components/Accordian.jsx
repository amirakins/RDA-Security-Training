import React from 'react'

function Accordian({heading, info, target}) {
  return (
    <> 
      <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+target} aria-expanded="false" aria-controls={target}>
                {heading}
              </button>
            </h2>
            <div id={target} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">{info}</div>
            </div>
          </div>
    </>
  )
}

export default Accordian
