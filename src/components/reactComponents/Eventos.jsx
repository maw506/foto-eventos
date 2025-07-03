const eventos = [
  {
    slug: "encuentro-brisas-1",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 1",
    portada: "/eventos/encuentro-brisas-1/foto_14.jpg",
  },
  {
    slug: "encuentro-brisas-2",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 2",
    portada: "/eventos/encuentro-brisas-2/foto_8.jpg",
  },
  {
    slug: "encuentro-brisas-3",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 3",
    portada: "/eventos/encuentro-brisas-3/foto_23.jpg",
  },
  {
    slug: "encuentro-brisas-4",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 4",
    portada: "/eventos/encuentro-brisas-4/foto_1.jpg",
  },
  {
    slug: "encuentro-brisas-5",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 5",
    portada: "/eventos/encuentro-brisas-5/foto_17.jpg",
  },
  {
    slug: "encuentro-brisas-6",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 6",
    portada: "/eventos/encuentro-brisas-6/foto_23.jpg",
  },
  {
    slug: "encuentro-brisas-7",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 7",
    portada: "/eventos/encuentro-brisas-7/foto_21.jpg",
  },
  {
    slug: "encuentro-brisas-8",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 8",
    portada: "/eventos/encuentro-brisas-8/foto_36.jpg",
  },
  {
    slug: "encuentro-brisas-9",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 9",
    portada: "/eventos/encuentro-brisas-9/foto_18.jpg",
  },
  {
    slug: "encuentro-brisas-10",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 10",
    portada: "/eventos/encuentro-brisas-10/foto_24.jpg",
  },
  {
    slug: "encuentro-brisas-11",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 11",
    portada: "/eventos/encuentro-brisas-11/foto_32.jpg",
  },
  {
    slug: "encuentro-brisas-12",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 12",
    portada: "/eventos/encuentro-brisas-12/foto_49.jpg",
  },
  {
    slug: "encuentro-brisas-13",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 13",
    portada: "/eventos/encuentro-brisas-13/foto_59.jpg",
  },
  {
    slug: "encuentro-brisas-14",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 14",
    portada: "/eventos/encuentro-brisas-14/foto_37.jpg",
  },
  {
    slug: "encuentro-brisas-15",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 15",
    portada: "/eventos/encuentro-brisas-15/foto_8.jpg",
  },
  {
    slug: "encuentro-brisas-16",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 16",
    portada: "/eventos/encuentro-brisas-16/foto_33.jpg",
  },
  {
    slug: "encuentro-brisas-17",
    titulo: "Encuentro Brisas del sur",
    subtitulo: "Academia Parte 17",
    portada: "/eventos/encuentro-brisas-17/foto_23.jpg",
  },
];

export default function Eventos() {
  return (
    <section className="galeria-eventos  py-5">
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
                <h3 className="titulo-evento">{evento.titulo}</h3>
                <h6 className="subtitulo-evento">{evento.subtitulo}</h6>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
