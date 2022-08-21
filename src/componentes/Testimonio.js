import React from "react";
import "../hojas-de-estilo/testimonio.css";
export function Testimonio(props) {
  return (
    <>
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../imagenes/testimonio-${props.imagen}.png`)}
          alt="foto de julia"
        />

        <div className="contenedor-texto-textimonio">
          <p className="nombre-testimonio">
            <strong> {props.nombre}</strong> en {props.pais}{" "}
          </p>
          <p className="cargo-testimonio">
            {" "}
            {props.cargo} en <strong> {props.empresa}</strong>{" "}
          </p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
      </div>
    </>
  );
}
