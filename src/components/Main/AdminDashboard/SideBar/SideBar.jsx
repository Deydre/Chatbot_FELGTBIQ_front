import React, { useContext, useState, useEffect } from 'react';
// import { context } from "../../../../context/context"
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import { getEdadData } from "../../../../services/estadisticasData"

const SideBar = () => {

  const handleClick = async () => {
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
          <p onClick={handleClick}>Orientación sexual</p>
        </li>
        <li>
        <p onClick={handleClick}>Edad</p>
        </li>
        <li>
        <p onClick={handleClick}>Lugar de origen</p>

        </li>
        <li>
        <p onClick={handleClick}>Ciudad</p>

        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
