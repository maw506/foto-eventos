const eventos = [
  {
    slug: "encuentro-brisas-1",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 1",
    portada: "/pics/pic5.jpg",
  },
  {
    slug: "encuentro-brisas-2",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 2",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-3",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 3",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-4",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 4",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-5",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 5",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-6",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 6",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-7",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 7",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-8",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 8",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-9",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 9",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-10",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 10",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-11",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 11",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-12",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 12",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-13",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 13",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-14",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 14",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-15",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 15",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-16",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 16",
    portada: "/pics/pic2.jpg",
  },
  {
    slug: "encuentro-brisas-17",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 17",
    portada: "/pics/pic2.jpg",
  },
];


export default function Eventos() {
  return (
    <section className="galeria-eventos container py-5">
      <h2 className="text-center mb-4 text-dark">Eventos publicados</h2>

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
