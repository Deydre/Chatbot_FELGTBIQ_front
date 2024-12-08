import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";


const Formulario = ({updateUserType, userType, updateIsSubmitted}) => {

  // MANEJO DE BOTONES INICIALES
  // const [isMedicalStaff, setMedicalStaff] = useState("");

  const handleMedicalStaff = (event) => {
    updateUserType(event.target.id);
  };

  // ATRÁS BUTTON
  const handleAtras = (e) => {
    updateUserType("");
  };

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

// Nacionalidades
const nacionalidades = [
  "Afghana", "Albanesa", "Alemana", "Andorrana", "Angoleña", "Antigua y Barbudense",
  "Argentina", "Armenia", "Australiana", "Austríaca", "Azerbaiyana", "Bahameña",
  "Bangladesí", "Barbadense", "Bielorrusa", "Belga", "Beliceña", "Beninesa",
  "Boliviana", "Bosnia y Herzegovina", "Botswana", "Brasileña", "Bruneana", "Búlgara",
  "Burundesa", "Butanesa", "Bárbuda", "Caboverdiana", "Camboyana", "Camerunesa",
  "Canadiense", "Chadiana", "Chilena", "China", "Chipriota", "Colombiana",
  "Comorense", "Congoleña", "Costarricense", "Croata", "Cubana", "Danesa",
  "Dominicana", "Ecuatoriana", "Egipcia", "Emiratí", "Ecuatoguineana", "Eslovaca",
  "Eslovena", "Española", "Estadounidense", "Estonia", "Etiopía", "Fiyiana",
  "Filipina", "Finlandesa", "Francesa", "Gabonesa", "Gambiana", "Georgiana",
  "Ghanesa", "Granadina", "Guatemalteca", "Guineana", "Guineoecuatoriana", "Guyanes",
  "Haitiana", "Hondureña", "Hongkonesa", "Hungara", "Icelandeza", "India",
  "Indonesa", "Irakí", "Iraní", "Israelí", "Italiana", "Jamaicana",
  "Japonera", "Jordana", "Keniana", "Kirguisa", "Kosovar", "Kuwaiti",
  "Laosiana", "Latviana", "Lesotense", "Liberiana", "Libia", "Liechtensteiniana",
  "Lituana", "Luxemburguesa", "Macedonia", "Madagascariana", "Malagueña", "Malawiana",
  "Malasia", "Maldiva", "Maliense", "Marfileña", "Mauriciana", "Mauritana",
  "Mexicana", "Mianmara", "Moldava", "Monegasca", "Mongola", "Mozambiqueña",
  "Namibia", "Nauruana", "Nepalesa", "Nicaragüense", "Nigeriana", "Noruega",
  "Nueva Zelanda", "Níger", "Palestina", "Panameña", "Papúa Nueva Guinea", "Paraguaya",
  "Peruana", "Polaca", "Portuguesa", "Qatarí", "Reino Unido", "República Checa",
  "República Dominicana", "Ruandesa", "Rumana", "Rusa", "Salvadoreña", "Samoana",
  "San Cristóbal y Nieves", "San Marino", "Sao Tomeana", "Senegalesa", "Serbia", "Seychelense",
  "Sierra Leona", "Singapurense", "Siria", "Somalí", "Sri Lanka", "Sudafricana",
  "Sudanesa", "Surinamesa", "Sueca", "Suiza", "Súdano", "Svajilandesa", "Tailandesa",
  "Tanzana", "Togo", "Tonga", "Trinitaria y Tobaguense", "Tunisina", "Turca",
  "Turcomana", "Tuvalu", "Ucraniana", "Ugandesa", "Uruguaya", "Uzbeca",
  "Vanuatu", "Venezolana", "Vietnamita", "Yemení", "Yugoslava", "Zambiana", "Zimbabuense"
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

  if (userType === "sociosanitario") { // Si es sociosanitario
    if (validateFormSociosanitario()) { // Y si se valida el formulario
      console.log("Datos sociosanitario:", sociosanitarioValues);
    } 
    updateIsSubmitted(true)
  } else { // Si no es sociosanitario
    if (validateFormNoSociosanitario()) { // Y si se valida el formulario
      const noSociosanitarioData = {
        edad: Number(noSociosanitarioValues.edad),
        pronombre_el: noSociosanitarioValues.pronombres.includes('el'),
        pronombre_ella: noSociosanitarioValues.pronombres.includes('ella'),
        pronombre_elle: noSociosanitarioValues.pronombres.includes('elle'),
        identidad_genero: noSociosanitarioValues.genero,
        orientacion_sexual: noSociosanitarioValues.orientacion,
        vives_en_espana: noSociosanitarioValues.vive_espana === 'si',
        nacionalidad: noSociosanitarioValues.nacionalidad,
        permiso_residencia: noSociosanitarioValues.permiso_residencia === 'si',
        persona_racializada: noSociosanitarioValues.colectivos.includes('racializada'),
        persona_discapacitada: noSociosanitarioValues.colectivos.includes('discapacitada'),
        persona_sin_hogar: noSociosanitarioValues.colectivos.includes('sin_hogar'),
        persona_migrante: noSociosanitarioValues.colectivos.includes('migrante'),
        persona_intersexual: noSociosanitarioValues.colectivos.includes('intersexual'),
        nivel_estudios: noSociosanitarioValues.nivel_estudios,
        situacion_afectiva: noSociosanitarioValues.situacion_sentimental,
      };

      console.log("Datos no sociosanitario:", noSociosanitarioData);
      updateIsSubmitted(true)
    }
  }
}

return <>
  {userType === ""
    ?
    <section id="sectionXLButtons">
      <button className="XLButton" onClick={handleMedicalStaff} id="sociosanitario">SOY PERSONAL SOCIOSANITARIO</button>
      <button className="XLButton" onClick={handleMedicalStaff} id="noSociosanitario">NO SOY PERSONAL SOCIOSANITARIO </button>
    </section>
    :
    <section>
      <article id="back" onClick={handleAtras}>
        <button><IoIosArrowBack className="iconBack" />Atrás</button>
      </article>

      {userType === "noSociosanitario"
        ? <>
          <h1>Por favor, rellena los siguientes datos</h1>
          <form onSubmit={handleSubmit} id="initialForm">
            <article>
              <div>
                <label htmlFor="edad" className="labelTitulo">Edad</label>
                <input type="number" name="edad" min="14" max="100" onChange={handleChangeNoSociosanitario} />
                {errors.edad && <span className="error">{errors.edad}</span>}
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
                {errors.pronombres && <span className="error">{errors.pronombres}</span>}
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
                  <option value="otro">Otro</option>
                </select>
                {errors.orientacion && <span className="error">{errors.orientacion}</span>}
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
                <label htmlFor="nacionalidad" className="labelTitulo">Nacionalidad:</label>
                <select id="nacionalidad" name="nacionalidad" onChange={handleChangeNoSociosanitario}>
                  <option value="" disabled selected>Selecciona una opción</option>
                  {nacionalidades.map((nacionalidad, index) => {
                    return <option key={index} value={nacionalidad}>{nacionalidad}</option>
                  })}

                </select>
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
            <article id="lastQuestions">
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

              <div>
                <label htmlFor="nivel_estudios" className="labelTitulo">Nivel de estudios:</label>
                <select id="nivel_estudios" name="nivel_estudios" onChange={handleChangeNoSociosanitario}>
                  <option value="" disabled selected>Selecciona una opción</option>
                  <option value="universitarios">Estudios universitarios</option>
                  <option value="bachillerato">Bachillerato, grado superior</option>
                  <option value="educacion_basica">Educación básica</option>
                  <option value="sin_estudios">Sin estudios</option>
                </select>
                {errors.nivel_estudios && <span className="error">{errors.nivel_estudios}</span>}
              </div>

              <div>
                <label htmlFor="situacion_sentimental" className="labelTitulo">Situación afectiva/sentimental:</label>
                <select id="situacion_sentimental" name="situacion_sentimental" onChange={handleChangeNoSociosanitario}>
                  <option value="" disabled selected>Selecciona una opción</option>
                  <option value="solteria">Soltería</option>
                  <option value="pareja_estable">Pareja estable</option>
                  <option value="matrimonio">Matrimonio</option>
                  <option value="otras">Otras</option>
                </select>
                {errors.situacion_sentimental && <span className="error">{errors.situacion_sentimental}</span>}
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
              <button onClick={handleSubmit}>ABRIR CHATBOT</button>
            ) : (
              <button className="buttonDisabled">ABRIR CHATBOT</button>
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
              <button onClick={handleSubmit}>ABRIR CHATBOT</button>
            ) : (
              <button className="buttonDisabled">ABRIR CHATBOT</button>
            )}
        </>
      }
    </section>

  }
</>
}

export default Formulario;
