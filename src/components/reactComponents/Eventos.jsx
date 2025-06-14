const eventos = [
  {
    slug: "prod-brisas-sur",
    titulo: "Academia Brisas del sur",
    portada: "/pics/pic2.jpg",
  },
  // {
  //   slug: "15-ema",
  //   titulo: "15 Años de Ema",
  //   portada: "/pics/pic3.jpg",
  // },
  // {
  //   slug: "academia-renacer-argentina",
  //   titulo: "Academia Renacer Argentina",
  //   portada: "/pics/pic2.jpg",
  // },
];

export default function Eventos() {
  return (
    <section className="galeria-eventos container py-5">
      <div className="row g-4">
        {eventos.map((evento) => (
          <div className="col-12 col-sm-6 col-lg-4" key={evento.slug}>
            <div className="evento-card p-3 bg-dark rounded-3">
              <a
                href={`/galeria/${evento.slug}`}
                className="text-decoration-none text-white"
              >
                <img
                  src={evento.portada}
                  alt={evento.titulo}
                  className="img-fluid rounded mb-3"
                />
                <h3 className="h5 text-center">{evento.titulo}</h3>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
