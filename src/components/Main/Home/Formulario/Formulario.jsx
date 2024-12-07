import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Formulario = ({ onSubmit }) => {
  const [values, setValues] = useState({
    edad: 0,
    pronombres: "",
    genero: "",
    orientacion: "",
    vive_espana: "",
    permiso_residencia: "",
    colectivos: [],
  });

  const [isMedicalStaff, setMedicalStaff] = useState(""); // Controla si es sociosanitario

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setValues((prevValues) => {
        const newColectivos = checked
          ? [...prevValues.colectivos, value]
          : prevValues.colectivos.filter((colectivo) => colectivo !== value);
        return { ...prevValues, colectivos: newColectivos };
      });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values, isMedicalStaff);
  };

  const handleMedicalStaff = (event) => {
    setMedicalStaff(event.target.id);
  };

  const handleAtras = () => {
    setMedicalStaff("");
  };

  return (
    <>
      {isMedicalStaff === "" ? (
        <section id="sectionXLButtons">
          <button
            className="XLButton"
            onClick={handleMedicalStaff}
            id="sociosanitario"
          >
            SOY SOCIOSANITARIO
          </button>
          <button
            className="XLButton"
            onClick={handleMedicalStaff}
            id="no sociosanitario"
          >
            NO SOY SOCIOSANITARIO
          </button>
        </section>
      ) : (
        <section>
          <article id="back" onClick={handleAtras}>
            <button>
              <IoIosArrowBack className="iconBack" />
              Atrás
            </button>
          </article>

          <h1>
            {isMedicalStaff === "sociosanitario"
              ? "Rellena los datos del paciente"
              : "Rellena tus datos"}
          </h1>
          <form onSubmit={handleSubmit} id="initialForm">
            <article>
              <div>
                <label htmlFor="edad" className="labelTitulo">
                  Edad
                </label>
                <input
                  type="number"
                  id="edad"
                  name="edad"
                  min="0"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="pronombres" className="labelTitulo">
                  Pronombres:
                </label>
                <select
                  id="pronombres"
                  name="pronombres"
                  onChange={handleChange}
                  value={values.pronombres}
                >
                  <option value="" disabled>
                    -- Seleccione --
                  </option>
                  <option value="el">Él</option>
                  <option value="ella">Ella</option>
                  <option value="elle">Elle</option>
                </select>
              </div>

              <div>
                <label htmlFor="genero" className="labelTitulo">
                  Identidad de Género:
                </label>
                <select
                  id="genero"
                  name="genero"
                  onChange={handleChange}
                  value={values.genero}
                >
                  <option value="" disabled>
                    -- Seleccione --
                  </option>
                  <option value="hombre_cis">Hombre Cis</option>
                  <option value="hombre_trans">Hombre Trans</option>
                  <option value="mujer_cis">Mujer Cis</option>
                  <option value="mujer_trans">Mujer Trans</option>
                  <option value="no_binario">No Binario</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="orientacion" className="labelTitulo">
                  Orientación Sexual:
                </label>
                <select
                  id="orientacion"
                  name="orientacion"
                  onChange={handleChange}
                  value={values.orientacion}
                >
                  <option value="" disabled>
                    -- Seleccione --
                  </option>
                  <option value="gay">Gay</option>
                  <option value="lesbiana">Lesbiana</option>
                  <option value="bisexual">Bisexual</option>
                  <option value="pansexual">Pansexual</option>
                  <option value="asexual">Asexual</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </article>
            <article id="lastQuestions">
              <div>
                <label htmlFor="vive_espana" className="labelTitulo">
                  ¿Vives en España?:
                </label>
                <div>
                  <input
                    type="radio"
                    id="vive_si"
                    name="vive_espana"
                    value="si"
                    onChange={handleChange}
                  />
                  <label htmlFor="vive_si">Sí</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="vive_no"
                    name="vive_espana"
                    value="no"
                    onChange={handleChange}
                  />
                  <label htmlFor="vive_no">No</label>
                </div>
              </div>

              <div>
                <label htmlFor="permiso_residencia" className="labelTitulo">
                  ¿Tienes permiso de residencia en España?:
                </label>
                <div>
                  <input
                    type="radio"
                    id="permiso_si"
                    name="permiso_residencia"
                    value="si"
                    onChange={handleChange}
                  />
                  <label htmlFor="permiso_si">Sí</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="permiso_no"
                    name="permiso_residencia"
                    value="no"
                    onChange={handleChange}
                  />
                  <label htmlFor="permiso_no">No</label>
                </div>
              </div>

              <div>
                <label htmlFor="colectivos" className="labelTitulo">
                  ¿Perteneces a alguno de estos colectivos?:
                </label>
                <div>
                  <input
                    type="checkbox"
                    id="racializada"
                    name="colectivos"
                    value="racializada"
                    onChange={handleChange}
                  />
                  <label htmlFor="racializada">Persona racializada</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="discapacitada"
                    name="colectivos"
                    value="discapacitada"
                    onChange={handleChange}
                  />
                  <label htmlFor="discapacitada">Discapacitada</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="sin_hogar"
                    name="colectivos"
                    value="sin_hogar"
                    onChange={handleChange}
                  />
                  <label htmlFor="sin_hogar">Sin Hogar</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="migrante"
                    name="colectivos"
                    value="migrante"
                    onChange={handleChange}
                  />
                  <label htmlFor="migrante">Migrante</label>
                </div>
              </div>
            </article>

            {values.edad > 0 &&
            values.pronombres &&
            values.genero &&
            values.orientacion &&
            values.vive_espana &&
            values.permiso_residencia ? (
              <button type="submit">ENVIAR</button>
            ) : (
              <button className="buttonDisabled" disabled>
                ENVIAR
              </button>
            )}
          </form>
        </section>
      )}
    </>
  );
};

export default Formulario;
