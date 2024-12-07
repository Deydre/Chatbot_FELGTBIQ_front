import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Formulario = () => {


  // MANEJO DE BOTONES INICIALES
  const [isMedicalStaff, setMedicalStaff] = useState("");

  const handleMedicalStaff = (event) => {
    setMedicalStaff(event.target.id);
  };

  // ATRAS BUTTON
  const handleAtras = (e) => {
    setMedicalStaff("");
  }

  // MANEJO DEL FORMULARIO
  // Sociosanitario
  const [sociosanitarioValues, setSociosanitarioValues] = useState({
    sociosanitario: true,
    provincia: "",
    ambito_laboral: "",
  });

  // No sociosanitario
  const [noSociosanitarioValues, setNoSociosanitarioValues] = useState({
    sociosanitario: false,
    edad: "",
    pronombres: [],
    genero: "",
    orientacion: "",
    vive_espana: "",
    permiso_residencia: "",
    colectivos: [],
    nivel_estudios: "",
    situacion_sentimental: "",
  });

  // Provincias
  const provincias = [
    "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila",
    "Badajoz", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria",
    "Castellón", "Ciudad Real", "Córdoba", "Cuenca", "Girona", "Granada",
    "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Islas Baleares",
    "Jaén", "La Coruña", "La Rioja", "Las Palmas", "León", "Lleida",
    "Lugo", "Madrid", "Málaga", "Murcia", "Navarra", "Ourense",
    "Palencia", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife",
    "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo",
    "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"
  ];

  const handleChangeSociosanitario = (e) => {
    const { name, value } = e.target;
    setSociosanitarioValues({ ...sociosanitarioValues, [name]: value });
  };

  const handleChangeNoSociosanitario = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setNoSociosanitarioValues((prev) => {
        let updatedField = [...prev[name]]; // Determinar qué array se está manejando (colectivos o pronombres)
        if (checked) {
          updatedField.push(value);
        } else {
          updatedField = updatedField.filter((item) => item !== value);
        }
        return { ...prev, [name]: updatedField };
      });
    } else {
      setNoSociosanitarioValues({ ...noSociosanitarioValues, [name]: value });
    }
  };

  // Mandar a data resultados
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMedicalStaff === "true") {
      console.log("Datos sociosanitario:", sociosanitarioValues);
    } else {
      console.log("Datos no sociosanitario:", noSociosanitarioValues);
    }
  };

  return <>
    {isMedicalStaff === ""
      ?
      <section id="sectionXLButtons">
        <button className="XLButton" onClick={handleMedicalStaff} id="true">SOY SOCIOSANITARIO</button>
        <button className="XLButton" onClick={handleMedicalStaff} id="false">NO SOY SOCIOSANITARIO </button>
      </section>
      :
      <section>
        <article id="back" onClick={handleAtras}>
          <button><IoIosArrowBack className="iconBack" />Atrás</button>
        </article>

        {isMedicalStaff !== "true"
          ? <>
            <h1>Por favor, rellena los siguientes datos</h1>
            <form onSubmit={handleSubmit} id="initialForm">
              <article>
                <div>
                  <label htmlFor="edad" className="labelTitulo">Edad</label>
                  <input type="number" name="edad" min="14" max="100" onChange={handleChangeNoSociosanitario} />
                </div>

                <div>
                  <label className="labelTitulo">Pronombres:</label>
                  <div>
                    <input
                      type="checkbox"
                      id="pronombre_el"
                      name="pronombres"
                      value="el"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="pronombre_el">Él</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="pronombre_ella"
                      name="pronombres"
                      value="ella"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="pronombre_ella">Ella</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="pronombre_elle"
                      name="pronombres"
                      value="elle"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="pronombre_elle">Elle</label>
                  </div>
                </div>

                <div>
                  <label htmlFor="genero" className="labelTitulo">Identidad de Género:</label>
                  <select id="genero" name="genero" onChange={handleChangeNoSociosanitario}>
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="hombre_cis">Hombre Cis</option>
                    <option value="hombre_trans">Hombre Trans</option>
                    <option value="mujer_cis">Mujer Cis</option>
                    <option value="mujer_trans">Mujer Trans</option>
                    <option value="no_binario">No Binario</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="orientacion" className="labelTitulo">Orientación Sexual:</label>
                  <select id="orientacion" name="orientacion" onChange={handleChangeNoSociosanitario}>
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="gay">Gay</option>
                    <option value="lesbiana">Lesbiana</option>
                    <option value="bisexual">Bisexual</option>
                    <option value="pansexual">Pansexual</option>
                    <option value="asexual">Asexual</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="labelTitulo">¿Vives en España?:</label>
                  <div>
                    <input type="radio" id="vive_si" name="vive_espana" value="si" onChange={handleChangeNoSociosanitario} />
                    <label htmlFor="vive_si">Sí</label>
                  </div>
                  <div>
                    <input type="radio" id="vive_no" name="vive_espana" value="no" onChange={handleChangeNoSociosanitario} />
                    <label htmlFor="vive_no">No</label>
                  </div>

                </div>

                <div>
                  <label className="labelTitulo">¿Tienes permiso de residencia en España?:</label>
                  <div>
                    <input type="radio" id="permiso_si" name="permiso_residencia" value="si" onChange={handleChangeNoSociosanitario} />
                    <label htmlFor="permiso_si">Sí</label>
                  </div>
                  <div>
                    <input type="radio" id="permiso_no" name="permiso_residencia" value="no" onChange={handleChangeNoSociosanitario} />
                    <label htmlFor="permiso_no">No</label>
                  </div>
                </div>

              </article>
              <article id="lastQuestions">
                <div>
                  <label className="labelTitulo">¿Perteneces a alguno de estos colectivos?:</label>
                  <div>
                    <input type="checkbox" id="racializada" name="colectivos" value="racializada" onChange={handleChangeNoSociosanitario} />
                    <label htmlFor="racializada">Persona racializade</label>
                  </div>

                  <div>
                    <input type="checkbox" id="discapacitada" name="colectivos" value="discapacitada" onChange={handleChangeNoSociosanitario} />
                    <label htmlFor="discapacitada">Persona discapacitade</label>
                  </div>

                  <div>
                    <input type="checkbox" id="sin_hogar" name="colectivos" value="sin_hogar" onChange={handleChangeNoSociosanitario} />
                    <label htmlFor="sin_hogar">Persona sin hogar</label>
                  </div>

                  <div>
                    <input type="checkbox" id="migrante" name="colectivos" value="migrante" onChange={handleChangeNoSociosanitario} />
                    <label htmlFor="migrante">Persona migrante</label>
                  </div>
                </div>

                <div>
                  <label className="labelTitulo">Nivel de estudios:</label>
                  <div>
                    <input
                      type="radio"
                      id="universitarios"
                      name="nivel_estudios"
                      value="universitarios"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="universitarios">Estudios universitarios</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="bachillerato"
                      name="nivel_estudios"
                      value="bachillerato"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="bachillerato">Bachillerato, grado superior</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="educacion_basica"
                      name="nivel_estudios"
                      value="educacion_basica"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="educacion_basica">Educación básica</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="sin_estudios"
                      name="nivel_estudios"
                      value="sin_estudios"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="sin_estudios">Sin estudios</label>
                  </div>
                </div>

                <div>
                  <label className="labelTitulo">Situación afectiva/sentimental:</label>
                  <div>
                    <input
                      type="radio"
                      id="solteria"
                      name="situacion_sentimental"
                      value="solteria"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="solteria">Soltería</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="pareja_estable"
                      name="situacion_sentimental"
                      value="pareja_estable"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="pareja_estable">Pareja estable</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="matrimonio"
                      name="situacion_sentimental"
                      value="matrimonio"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="matrimonio">Matrimonio</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="otras"
                      name="situacion_sentimental"
                      value="otras"
                      onChange={handleChangeNoSociosanitario}
                    />
                    <label htmlFor="otras">Otras</label>
                  </div>
                </div>

              </article>

            </form>
            {noSociosanitarioValues.edad >= 14 &&
              noSociosanitarioValues.edad <= 100 &&
              noSociosanitarioValues.pronombres &&
              noSociosanitarioValues.genero &&
              noSociosanitarioValues.orientacion &&
              noSociosanitarioValues.permiso_residencia &&
              noSociosanitarioValues.vive_espana &&
              noSociosanitarioValues.permiso_residencia &&
              noSociosanitarioValues.nivel_estudios &&
              noSociosanitarioValues.situacion_sentimental
              ? (
                <button onClick={handleSubmit}>ENVIAR</button>
              ) : (
                <button className="buttonDisabled">ENVIAR</button>
              )}
          </>
          : <>
            <h1>Por favor, rellena los siguientes datos</h1>
            <form onSubmit={handleSubmit} id="initialForm">
              <article>
                <div>
                  <label htmlFor="provincia" className="labelTitulo">Provincia:</label>
                  <select id="provincia" name="provincia" onChange={handleChangeSociosanitario}>
                    <option value="" disabled selected>Selecciona una opción</option>
                    {provincias.map((provincia, index) => {
                      return <option key={index} value={provincia}>{provincia}</option>
                    })}
                    
                  </select>
                </div>

                <div>
                  <label htmlFor="ambito_laboral" className="labelTitulo">Ámbito laboral:</label>
                  <select id="ambito_laboral" name="ambito_laboral" onChange={handleChangeSociosanitario}>
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="centro_salud">Centro de Salud</option>
                    <option value="hospital">Hospital</option>
                    <option value="centro_comunitario">Centro Comunitario</option>
                    <option value="consulta_privada">Consulta Privada</option>
                    <option value="asociacion">Asociación</option>
                  </select>
                </div>
              </article>
            </form>
            {sociosanitarioValues.provincia &&
              sociosanitarioValues.ambito_laboral
              ? (
                <button onClick={handleSubmit}>ENVIAR</button>
              ) : (
                <button className="buttonDisabled">ENVIAR</button>
              )}
          </>
        }
      </section>

    }
  </>
}

export default Formulario;