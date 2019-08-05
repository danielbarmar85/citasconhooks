import React, { useState, useEffect, Fragment } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //Cargar las citas del localStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // state = this.state
  // updateState = this.setState({});
  const [citas, guardarCitas] = useState(citasIniciales);

  // Agregar la nuevas citas al state
  const crearCita = cita => {
    //copy
    const nuevasCitas = [...citas, cita];

    //Guardamos en el state
    guardarCitas(nuevasCitas);
  };

  // Elimina las citas del state
  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);

    //Guardamos en el state
    guardarCitas(nuevasCitas);
  };

  useEffect(() => {
    return () => {
      let citasIniciales = JSON.parse(localStorage.getItem("citas"));

      if (citasIniciales) {
        localStorage.setItem("citas", JSON.stringify(citas));
      } else {
        localStorage.setItem("citas", JSON.stringify([]));
      }
    };
  }, [citas]);

  // Cargar condicionalmente un titulo.
  const titulo =
    Object.keys(citas).length === 0
      ? "No Hay citas"
      : "Administrar las citas Aquí";

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h1>{titulo}</h1>
            {citas.map((cita, index) => (
              <Cita
                key={index}
                index={index}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
