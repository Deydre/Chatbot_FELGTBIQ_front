import React, { useContext, useState, useEffect } from 'react';
// import { context } from "../../../../context/context"
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import { getEdadData } from "../../../../services/estadisticasData"

const SideBar = () => {

  const handleClickOrient = async () => {
    try {
      const response = await getEdadData();
      console.log(response);
    } catch (error) {
      console.log("Error al obtener datos estadísticos", error.message);
    }
  };

  const handleClickEdad = async () => {
    try {
      const response = await getEdadData();
      console.log(response);
    } catch (error) {
      console.log("Error al obtener datos estadísticos", error.message);
    }
  };

  const handleClickPais = async () => {
    try {
      const response = await getEdadData();
      console.log(response);
    } catch (error) {
      console.log("Error al obtener datos estadísticos", error.message);
    }
  };

  return (
    <aside id="SideBar">
      <h2>Estadísticas</h2>
      <ul>
        <li>
          <p onClick={handleClickOrient}>Orientación sexual</p>
        </li>
        <li>
        <p onClick={handleClickEdad}>Edad</p>
        </li>
        <li>
        <p onClick={handleClickPais}>Lugar de origen</p>

        </li>
        <li>
        <p onClick={handleClickOrient}>Ciudad</p>

        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
