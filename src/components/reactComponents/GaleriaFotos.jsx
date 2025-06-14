import { useState, useEffect } from "react";
import { Image, Button, FloatButton, Tooltip } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

export default function GaleriaFotos({ evento }) {
  const [imagenes, setImagenes] = useState([]);
  const [seleccionadas, setSeleccionadas] = useState([]);

  useEffect(() => {
    const cantidadPorEvento = {
      "prod-brisas-sur": 6,
      "15-ema": 5,
      "academia-renacer-argentina": 5,
    };

    const total = cantidadPorEvento[evento] || 0;
    const nuevasImagenes = [];

    for (let i = 1; i <= total; i++) {
      nuevasImagenes.push(`/eventos/${evento}/foto_${i}.jpg`);
    }

    setImagenes(nuevasImagenes);
  }, [evento]);

  useEffect(() => {
    localStorage.setItem(`fotos-${evento}`, JSON.stringify(seleccionadas));
  }, [seleccionadas]);

  const toggleSeleccion = (src) => {
    setSeleccionadas((prev) =>
      prev.includes(src) ? prev.filter((img) => img !== src) : [...prev, src]
    );
  };

  const generarMensajeWsp = () => {
    const nombres = seleccionadas.map((src) => src.split("/").pop()).join(", ");
    const texto = `Hola! Quiero solicitar las siguientes fotos del evento "${evento}": ${nombres}`;
    const mensajeCodificado = encodeURIComponent(texto);
    const numero = "+543547598412";
    return `https://wa.me/${numero}?text=${mensajeCodificado}`;
  };

  return (
    <>
      <section className="galeria-fotos container py-5">
        <h2 className="text-white mb-4 text-center">Seleccioná tus fotos</h2>
        <Image.PreviewGroup>
          <div className="row g-3">
            {imagenes.map((src, i) => (
              <div className="col-6 col-md-4 col-lg-3" key={src}>
                <div className="text-center">
                  <div style={{ position: "relative" }}>
                    <Image
                      src={src}
                      alt={`Foto ${i + 1}`}
                      className="img-fluid rounded"
                      preview={{ mask: `Foto ${i + 1}` }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        color: "white",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        fontSize: "0.8rem",
                      }}
                    >
                      #{i + 1}
                    </span>
                  </div>
                  <Button
                    type={seleccionadas.includes(src) ? "primary" : "default"}
                    onClick={() => toggleSeleccion(src)}
                    className="mt-2"
                    block
                  >
                    {seleccionadas.includes(src)
                      ? "Seleccionada ✅"
                      : "Seleccionar"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Image.PreviewGroup>
      </section>

      {seleccionadas.length > 0 && (
        <Tooltip title="Solicitar fotos por WhatsApp">
          <a
            href={generarMensajeWsp()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              zIndex: 1000,
              backgroundColor: "#25D366",
              borderRadius: "50%",
              width: "56px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            }}
          >
            <WhatsAppOutlined style={{ color: "white", fontSize: "24px" }} />
          </a>
        </Tooltip>
      )}
    </>
  );
}
