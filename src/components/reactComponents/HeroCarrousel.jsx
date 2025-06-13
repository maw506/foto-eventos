import { useEffect } from "react";

const fotos = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];

export default function HeroCarousel() {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {fotos.map((foto, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={`/pics/${foto}`}
              className="d-block w-100"
              alt={`Foto ${index + 1}`}
              loading="lazy"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Revive el momento</h5>
              <p>Capturá tus recuerdos</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      ></button>
      
      <div className="text-center mt-3">
        <a href="#quien-soy" className="btn btn-light">
          Conocer más ↓
        </a>
      </div>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      ></button>
    </div>
  );
}
