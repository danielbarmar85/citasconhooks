import React, { useState, Fragment } from "react";

function Formulario(props) {
  const stateInitial = {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  };

  //cita = state actual
  //actualizarCita = fn para cambiar el state
  const [cita, actualizarCita] = useState(stateInitial);

  //actualiza el state
  const handleChange = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  //Pasamos la cita al componente principal.
  const handleSubmit = e => {
    e.preventDefault();

    // Pasar la cita hacia el componente principal
    props.crearCita(cita);

    // Reiniciar el state
    actualizarCita(stateInitial);
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={cita.mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={handleChange}
          value={cita.propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          onChange={handleChange}
          value={cita.fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          onChange={handleChange}
          value={cita.hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={cita.sintomas}
        />

        <button type="submit" className="button-primary u-full-width">
          Agregar
        </button>
      </form>
    </Fragment>
  );
}

export default Formulario;
