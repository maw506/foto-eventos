import { useEffect } from "react";

const fotos = [
  "pic-14.jpg", "pic-15.jpg", "pic-16.jpg", "pic-18.jpg",
  "pic-19.jpg", "pic-20.jpg", "pic-21.jpg", "pic-22.jpg", "pic-23.jpg",
  "pic-24.jpg", "pic-25.jpg", "pic-26.jpg", "pic-27.jpg",
  "pic-29.jpg", "pic-30.jpg", "pic-31.jpg", "pic-32.jpg", "pic-33.jpg",
  "pic-34.jpg", "pic-35.jpg", "pic-36.jpg", "pic-37.jpg", "pic-38.jpg",
  "pic-39.jpg", "pic-40.jpg", "pic-41.jpg", "pic-42.jpg", "pic-43.jpg",
  "pic-44.jpg", "pic-45.jpg", "pic-46.jpg", "pic-47.jpg"
];

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
