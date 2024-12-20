import React, { useState, useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { sendFormSociosanitarioData, sendFormNoSociosanitarioData } from "../../../../services/formData"
import { context } from '../../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import '@fontsource/roboto';

import TransitionsModal from "../TransitionsModal"; // Importa el modal



const Formulario = ({ updateUserType, userType, updateIsSubmitted }) => {

  // MANEJO DE BOTONES INICIALES
  // const [isMedicalStaff, setMedicalStaff] = useState("");
  const { userId, updateUserId } = useContext(context);
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal

  const handleMedicalStaff = (event) => {
    updateUserType(event.target.id);
    updateUserId(Date.now() + uuidv4().replace(/-/g, ''))
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  // ATRÁS BUTTON
  const handleAtras = (e) => {
    updateUserType("");
  };

  // MANEJO DEL FORMULARIO
  // Sociosanitario
  const [sociosanitarioValues, setSociosanitarioValues] = useState({
    provincia: "",
    ambito_laboral: "",
  });

  // No sociosanitario
  const [noSociosanitarioValues, setNoSociosanitarioValues] = useState({
    sociosanitario: false,
    edad: 0,
    pronombres: [],
    genero: "",
    orientacion: "",
    vive_espana: "",
    nacionalidad: "",
    permiso_residencia: "",
    colectivos: [],
    nivel_estudios: "",
    situacion_sentimental: "",
    provincia: ""
  });

  const [errors, setErrors] = useState({
    edad: "",
    pronombres: "",
    genero: "",
    orientacion: "",
    vive_espana: "",
    permiso_residencia: "",
    nivel_estudios: "",
    situacion_sentimental: "",
    provincia: "",
    ambito_laboral: "",
  });

  const validateFormNoSociosanitario = () => {
    let formErrors = {};

    (noSociosanitarioValues.edad < 14 || noSociosanitarioValues.edad > 90)
      ? formErrors.edad = "La edad debe ser entre 14 y 90 años"
      : ""

    noSociosanitarioValues.pronombres.length === 0
      ? formErrors.pronombres = "Por favor, selecciona al menos un pronombre"
      : ""

    !noSociosanitarioValues.genero
      ? formErrors.genero = "Por favor, selecciona tu identidad de género"
      : ""

    !noSociosanitarioValues.orientacion
      ? formErrors.orientacion = "Por favor, selecciona tu orientación sexual"
      : ""

    !noSociosanitarioValues.vive_espana
      ? formErrors.vive_espana = "Por favor, selecciona si vives en España"
      : ""

    !noSociosanitarioValues.permiso_residencia
      ? formErrors.permiso_residencia = "Por favor, selecciona si tienes permiso de residencia"
      : ""

    !noSociosanitarioValues.nivel_estudios
      ? formErrors.nivel_estudios = "Por favor, selecciona tu nivel de estudios"
      : ""

    !noSociosanitarioValues.situacion_sentimental
      ? formErrors.situacion_sentimental = "Por favor, selecciona tu situación sentimental"
      : "";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };



  const validateFormSociosanitario = () => {
    let formErrors = {};
    if (!sociosanitarioValues.provincia) {
      formErrors.provincia = "Por favor, selecciona tu provincia";
    }

    if (!sociosanitarioValues.ambito_laboral) {
      formErrors.ambito_laboral = "Por favor, selecciona tu ámbito laboral";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }

  // Provincias
  const provincias = [
    'Álava', 'Albacete', 'Alicante', 'Almería', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ceuta', 'Córdoba', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Huelva', 'Huesca', 'Jaén', 'La Rioja', 'Las Palmas', 'León', 'Lugo', 'Madrid', 'Málaga', 'Melilla', 'Murcia', 'Navarra', 'Ourense', 'Palencia', 'Pontevedra', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Fuera de España'
  ];

  // Nacionalidades
  const nacionalidades = [
    "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Bielorrusia", "Bélgica", "Belice", "Benín", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Chad", "Chile", "China", "Chipre", "Colombia", "Comoras", "República del Congo", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "República Dominicana", "Ecuador", "Egipto", "Emiratos Árabes Unidos", "Guinea Ecuatorial", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Fiyi", "Filipinas", "Finlandia", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Guatemala", "Guinea", "Guinea Ecuatorial", "Guyana", "Haití", "Honduras", "Hong Kong", "Hungría", "Islandia", "India", "Indonesia", "Irak", "Irán", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kenia", "Kirguistán", "Kosovo", "Kuwait", "Laos", "Letonia", "Lesoto", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia del Norte", "Madagascar", "Malaui", "Malasia", "Maldivas", "Malí", "Costa de Marfil", "Mauricio", "Mauritania", "México", "Myanmar", "Moldavia", "Mónaco", "Mongolia", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Nigeria", "Noruega", "Nueva Zelanda", "Níger", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Catar", "Reino Unido", "República Checa", "República Dominicana", "Ruanda", "Rumanía", "Rusia", "El Salvador", "Samoa", "San Cristóbal y Nieves", "San Marino", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Sudáfrica", "Sudán", "Surinam", "Suecia", "Suiza", "Sudán del Sur", "Esuatini", "Tailandia", "Tanzania", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turquía", "Turkmenistán", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yugoslavia", "Zambia", "Zimbabue"
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

  function formateoString(string) {
    let palabras = string.split('_');
    return palabras
      .map((palabra, index) => {
        if (index === 0) {
          return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }
        return palabra.toLowerCase();
      })
      .join(' ');
  }

  // FORMATEAMOS LOS RESULTADOS PARA MANDAR EL JSON A DATA  
  async function handleSubmit(e) {
    e.preventDefault();

    if (userType === "sociosanitario") { // Si es sociosanitario
      if (validateFormSociosanitario()) { // Y si se valida el formulario
        // if (!userId) {
        //   <HeartSpinner />
        // } else {
        const socioSanitarioData = {
          id_usuario: userId,
          provincia: sociosanitarioValues.provincia,
          ambito_laboral: formateoString(sociosanitarioValues.ambito_laboral)
        }
        console.log("Datos sociosanitario:", socioSanitarioData);
        const response = await sendFormSociosanitarioData(socioSanitarioData);
      }
      // }
      updateIsSubmitted(true)
    } else { // Si no es sociosanitario
      if (validateFormNoSociosanitario()) { // Y si se valida el formulario
        const noSociosanitarioData = {
          id_usuario: userId,
          edad: Number(noSociosanitarioValues.edad),
          pronombre_el: noSociosanitarioValues.pronombres.includes('el'),
          pronombre_ella: noSociosanitarioValues.pronombres.includes('ella'),
          pronombre_elle: noSociosanitarioValues.pronombres.includes('elle'),
          identidad_genero: formateoString(noSociosanitarioValues.genero),
          orientacion_sexual: formateoString(noSociosanitarioValues.orientacion),
          vives_en_espana: noSociosanitarioValues.vive_espana === 'si',
          nacionalidad: noSociosanitarioValues.nacionalidad,
          permiso_residencia: noSociosanitarioValues.permiso_residencia === 'si',
          persona_racializada: noSociosanitarioValues.colectivos.includes('racializada'),
          persona_discapacitada: noSociosanitarioValues.colectivos.includes('discapacitada'),
          persona_sin_hogar: noSociosanitarioValues.colectivos.includes('sin_hogar'),
          persona_migrante: noSociosanitarioValues.colectivos.includes('migrante'),
          persona_intersexual: noSociosanitarioValues.colectivos.includes('intersexual'),
          nivel_estudios: noSociosanitarioValues.nivel_estudios === "tecnicos" ? "Técnicos" : formateoString(noSociosanitarioValues.nivel_estudios),
          situacion_afectiva: formateoString(noSociosanitarioValues.situacion_sentimental),
          provincia: noSociosanitarioValues.provincia,
        };

        console.log("Datos no sociosanitario:", noSociosanitarioData);

        const response = await sendFormNoSociosanitarioData(noSociosanitarioData);
        updateIsSubmitted(true)
      }
    }
  }

  {/* Botón flotante */ }


  return <>
    {userType === ""
      ? <>
        <div id="divTitle">
          <p>¿Quieres saber más sobre el vih? ¡Estamos aquí para ti! Encuentra respuestas a tus preguntas, consejos y apoyo</p>
          <p> Rompamos el estigma.</p>
          <TransitionsModal open={showModal} onClose={handleCloseModal} />
          <div style={{ position: "fixed", bottom: "550px", right: "20px", zIndex: "1000" }}>
            <button
              onClick={handleOpenModal}
              style={{
                background: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#0056b3";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#007BFF";
              }}
            >
              ?
            </button>
          </div>
        </div>

        <section id="sectionXLButtons">
          <button className="XLButton" onClick={handleMedicalStaff} id="sociosanitario">SOY PERSONAL SOCIOSANITARIO</button>
          <button className="XLButton" onClick={handleMedicalStaff} id="noSociosanitario">NO SOY PERSONAL SOCIOSANITARIO </button>
        </section>
      </>
      :
      <section>
        <article id="back" onClick={handleAtras}>
          <button><IoIosArrowBack className="iconBack" />Atrás</button>
        </article>

        {userType === "noSociosanitario"
          ? <>
            <section id="sectionForm">
              <div className="formDivNoSocio">
                <h1>Por favor, rellena los siguientes datos</h1>
                <form onSubmit={handleSubmit} id="initialForm">
                  <section id="infoNoSocio">
                    <article>
                      <div>
                        <label htmlFor="edad" className="labelTitulo">Edad</label>
                        <input type="number" name="edad" min="14" max="100" onChange={handleChangeNoSociosanitario} />
                        {errors.edad && <span className="error">{errors.edad}</span>}
                      </div>

                      <div>
                        <label className="labelTitulo">Pronombres:</label>
                        <div id="pronombres">
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
                        {errors.pronombres && <span className="error">{errors.pronombres}</span>}
                      </div>

                      <div>
                        <label htmlFor="genero" className="labelTitulo">Identidad de Género:</label>
                        <select id="genero" name="genero" onChange={handleChangeNoSociosanitario}>
                          <option value="" disabled selected>Selecciona una opción</option>
                          <option value="hombre_cis">Hombre cis</option>
                          <option value="hombre_trans">Hombre trans</option>
                          <option value="mujer_cis">Mujer cis</option>
                          <option value="mujer_trans">Mujer trans</option>
                          <option value="no_binarie">No binarie</option>
                          <option value="otro">Otro</option>
                        </select>
                        {errors.genero && <span className="error">{errors.genero}</span>}
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
                          <option value="heterosexual">Heterosexual</option>
                          <option value="otro">Otro</option>
                        </select>
                        {errors.orientacion && <span className="error">{errors.orientacion}</span>}
                      </div>

                      <div>
                        <label className="labelTitulo">¿Perteneces a alguno de estos colectivos?:</label>
                        <div>
                          <input type="checkbox" id="racializada" name="colectivos" value="racializada" onChange={handleChangeNoSociosanitario} />
                          <label htmlFor="racializada">Persona racializada</label>
                        </div>

                        <div>
                          <input type="checkbox" id="discapacitada" name="colectivos" value="discapacitada" onChange={handleChangeNoSociosanitario} />
                          <label htmlFor="discapacitada">Persona discapacitada</label>
                        </div>

                        <div>
                          <input type="checkbox" id="sin_hogar" name="colectivos" value="sin_hogar" onChange={handleChangeNoSociosanitario} />
                          <label htmlFor="sin_hogar">Persona sin hogar</label>
                        </div>

                        <div>
                          <input type="checkbox" id="migrante" name="colectivos" value="migrante" onChange={handleChangeNoSociosanitario} />
                          <label htmlFor="migrante">Persona migrante</label>
                        </div>

                        <div>
                          <input type="checkbox" id="intersexual" name="colectivos" value="intersexual" onChange={handleChangeNoSociosanitario} />
                          <label htmlFor="intersexual">Persona intersexual</label>
                        </div>
                      </div>

                    </article>
                    <article id="lastQuestions">

                      <div>
                        <label htmlFor="situacion_sentimental" className="labelTitulo">Situación afectiva/sentimental:</label>
                        <select id="situacion_sentimental" name="situacion_sentimental" onChange={handleChangeNoSociosanitario}>
                          <option value="" disabled selected>Selecciona una opción</option>
                          <option value="soltere">Soltere</option>
                          <option value="en_pareja">En pareja</option>
                          <option value="casade">Casade</option>
                          <option value="divorciade">Divorciade</option>
                          <option value="viude">Viude</option>
                          <option value="otro">Otro</option>
                        </select>
                        {errors.situacion_sentimental && <span className="error">{errors.situacion_sentimental}</span>}
                      </div>

                      <div>
                        <label htmlFor="nivel_estudios" className="labelTitulo">Nivel de estudios:</label>
                        <select id="nivel_estudios" name="nivel_estudios" onChange={handleChangeNoSociosanitario}>
                          <option value="" disabled selected>Selecciona una opción</option>
                          <option value="primarios">Primarios</option>
                          <option value="secundarios">Secundarios</option>
                          <option value="tecnicos">Técnicos</option>
                          <option value="universitarios">Universitarios</option>
                          <option value="postgrado">Postgrado</option>
                          <option value="otro">Otro</option>
                        </select>
                        {errors.nivel_estudios && <span className="error">{errors.nivel_estudios}</span>}
                      </div>

                      <div>
                        <label htmlFor="nacionalidad" className="labelTitulo">Nacionalidad:</label>
                        <select id="nacionalidad" name="nacionalidad" onChange={handleChangeNoSociosanitario}>
                          <option value="" disabled selected>Selecciona una opción</option>
                          {nacionalidades.map((nacionalidad, index) => {
                            return <option key={index} value={nacionalidad}>{nacionalidad}</option>
                          })}

                        </select>
                      </div>

                      <div>
                        <label htmlFor="provincia" className="labelTitulo">Provincia:</label>
                        <select id="provincia" name="provincia" onChange={handleChangeNoSociosanitario}>
                          <option value="" disabled selected>Selecciona una opción</option>
                          {provincias.map((provincia, index) => {
                            return <option key={index} value={provincia}>{provincia}</option>
                          })}

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
                        {errors.vive_espana && <span className="error">{errors.vive_espana}</span>}
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
                        {errors.permiso_residencia && <span className="error">{errors.permiso_residencia}</span>}
                      </div>


                    </article>
                  </section>
                  <section id="btnNoSocio">


                    {noSociosanitarioValues.edad >= 14 &&
                      noSociosanitarioValues.edad <= 100 &&
                      noSociosanitarioValues.pronombres &&
                      noSociosanitarioValues.genero &&
                      noSociosanitarioValues.orientacion &&
                      noSociosanitarioValues.permiso_residencia &&
                      noSociosanitarioValues.vive_espana &&
                      noSociosanitarioValues.permiso_residencia &&
                      noSociosanitarioValues.nivel_estudios &&
                      noSociosanitarioValues.situacion_sentimental &&
                      noSociosanitarioValues.provincia
                      ? (
                        <button onClick={handleSubmit}>ABRIR CHATBOT</button>
                      ) : (
                        <button className="buttonDisabled">ABRIR CHATBOT</button>
                      )}
                  </section>
                </form>
              </div>
            </section>
          </>
          : <>
            <section id="sectionForm">
              <div className="formDivSocio">
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
                        <option value="centro_de_salud">Centro de Salud</option>
                        <option value="hospital">Hospital</option>
                        <option value="centro_comunitario">Centro Comunitario</option>
                        <option value="consulta_privada">Consulta Privada</option>
                        <option value="asociacion">Asociación</option>
                      </select>
                    </div>
                  </article>

                  {sociosanitarioValues.provincia &&
                    sociosanitarioValues.ambito_laboral
                    ? (
                      <button onClick={handleSubmit}>ABRIR CHATBOT</button>
                    ) : (
                      <button className="buttonDisabled">ABRIR CHATBOT</button>
                    )}
                </form>
              </div>
            </section>
          </>
        }
      </section>

    }
  </>
}

export default Formulario;
