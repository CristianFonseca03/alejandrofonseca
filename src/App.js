import React from "react";
import moment from "moment/locale/es";

function App() {
  console.log(moment);
  return (
    <>
      <h1>Hora actual :</h1>
      <h2></h2>
      <h1>Hora de carga :</h1>
      <h2></h2>
      <h1>Tiempo transcurrido desde la ultima carga :</h1>
      <h2>00:00:00</h2>
      <h2>0</h2>
      <h2>
        ------------------------------------------------------------------------
      </h2>
      <h1>Fecha de nacimiento: </h1>
      <h2></h2>
      <h1>Tiempo relativo: </h1>
      <h2></h2>
    </>
  );
}

export default App;
