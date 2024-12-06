import React, { useState } from "react";

const Formulario = () => {


  // Estado del formulario
  const [values, setValues] = useState({
    title: '',
    description: '',
    price: 0,
    img_url: ''
  });

  const handleChange = (e) => {
    setValues({
      ...values, // Conserva las claves anteriores
      [e.target.name]: e.target.value // Si cambia el título, guardarlo
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    addItem(values)
  }


  return <>
    <section>
      {/* <button>SOCIOSANITARIO</button>
      <button>NO SOCIOSANITARIO</button> */}
    </section>
    <section>
      <h1 htmlFor="name">Rellena tus datos (este título cambia)</h1>
      <form onSubmit={handleSubmit} id="initialForm">
        <article>
          <div>
            <label htmlFor="edad" className="labelTitulo">Edad</label>
            <input type="number" name="edad" min="0" onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="pronombres" className="labelTitulo">Pronombres:</label>
            <select id="pronombres" name="pronombres" onChange={handleChange}>
              <option value="el">Él</option>
              <option value="ella">Ella</option>
              <option value="elle">Elle</option>
            </select>
          </div>

          <div>
            <label htmlFor="genero" className="labelTitulo">Identidad de Género:</label>
            <select id="genero" name="genero" onChange={handleChange}>
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
            <select id="orientacion" name="orientacion" onChange={handleChange}>
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
            <label className="labelTitulo">¿Vives en España?:</label>
            <div>
              <input type="radio" id="vive_si" name="vive_espana" value="si" onChange={handleChange} />
              <label htmlFor="vive_si">Sí</label>
            </div>
            <div>
              <input type="radio" id="vive_no" name="vive_espana" value="no" onChange={handleChange} />
              <label htmlFor="vive_no">No</label>
            </div>

          </div>

          <div>
            <label className="labelTitulo">¿Tienes permiso de residencia en España?:</label>
            <div>
              <input type="radio" id="permiso_si" name="permiso_residencia" value="si" onChange={handleChange} />
              <label htmlFor="permiso_si">Sí</label>
            </div>
            <div>
              <input type="radio" id="permiso_no" name="permiso_residencia" value="no" onChange={handleChange} />
              <label htmlFor="permiso_no">No</label>
            </div>

          </div>

          <div>
            <label className="labelTitulo">¿Perteneces a alguno de estos colectivos?:</label>
            <div>
              <input type="checkbox" id="racializada" name="colectivos" value="racializada" onChange={handleChange} />
              <label htmlFor="racializada">Persona racializada</label>
            </div>

            <div>
              <input type="checkbox" id="discapacitada" name="colectivos" value="discapacitada" onChange={handleChange} />
              <label htmlFor="discapacitada">Discapacitada</label>
            </div>

            <div>
              <input type="checkbox" id="sin_hogar" name="colectivos" value="sin_hogar" onChange={handleChange} />
              <label htmlFor="sin_hogar">Sin Hogar</label>
            </div>

            <div>
              <input type="checkbox" id="migrante" name="colectivos" value="migrante" onChange={handleChange} />
              <label htmlFor="migrante">Migrante</label>
            </div>

          </div>

        </article>

        {values.title && values.description && values.price > 0 && values.img_url ? (
          <button type="submit">ENVIAR</button>
        ) : (
          <p>Rellena todos los campos para enviar</p>
        )}
      </form>
    </section>

  </>;
};

export default Formulario;
