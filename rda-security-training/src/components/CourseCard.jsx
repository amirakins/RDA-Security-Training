import React from 'react'
import { Link } from 'react-router-dom';

function CourseCard({link, img, name, desc, who, price}) {
  return (
    <>
      <Link className="link-offset-2 link-underline link-underline-opacity-0" to={link}>
        <div class="card mb-3 card-secondary card-hover">
  <div class="row g-0 h-100 d-flex align-items-stretch">
    <div class="col-md-4 d-flex align-items-stretch">
      <img src={img} class="img-fluid rounded-start" alt="handgun" />
    </div>
    <div class="col-md-8 d-flex align-items-stretch">
      <div class="card-body d-flex flex-column justify-content-between">
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
  </div>
</div>

        </Link>
    </>
  )
}

export default CourseCard
