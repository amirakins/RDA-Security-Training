import React from 'react'
import { Link } from 'react-router-dom';

function CourseCard({link, img, name, desc, who, price}) {
  return (
    <>
      <Link className="link-offset-2 link-underline link-underline-opacity-0" to={link}>
  <div class="card" style={{width: "18rem"}}>
    <img src={img} className="card-img-top" alt="e book" />
    <div class="card-body card-hover">
    <div>
          <h5 class="card-title"><strong>{name}</strong></h5>
          <p class="card-text">
            {desc}
            </p>

          <strong>Who Should Take This Course?</strong>
          <p>{who}</p>
        </div>
        <p class="card-text">
          <small class="text-body-secondary">{price}</small>
        </p>
         </div>
  </div>

        </Link>
    </>
  )
}

export default CourseCard
