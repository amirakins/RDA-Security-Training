import pic0 from "../assets/pic0.jpg";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";

function Carousel() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 0"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="8"
            aria-label="Slide 8"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic0} className="d-block w-100" alt="0" />
          </div>
          <div className="carousel-item">
            <img src={pic1} className="d-block w-100" alt="1" />
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block w-100" alt="2" />
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100" alt="3" />
          </div>
          <div className="carousel-item">
            <img src={pic4} className="d-block w-100" alt="4" />
          </div>
          <div className="carousel-item">
            <img src={pic5} className="d-block w-100" alt="5" />
          </div>
          <div className="carousel-item">
            <img src={pic6} className="d-block w-100" alt="6" />
          </div>
          <div className="carousel-item">
            <img src={pic7} className="d-block w-100" alt="7" />
          </div>
          <div className="carousel-item">
            <img src={pic8} className="d-block w-100" alt="8" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
