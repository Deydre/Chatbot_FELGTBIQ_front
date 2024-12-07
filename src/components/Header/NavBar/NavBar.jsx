import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import logo from "../../../assets/FELGTBI+_blancosinfondo.png";
import { useLocation } from "react-router-dom";

const NavBar = () => {

  const location = useLocation();

  // const { profile, updateProfile } = useContext(context);

  let profile = true;
  const handleLogout = async () => {
    try {
      await axios({
        method: 'get',
        url: 'https://pixelist.onrender.com/api/user/logout',
        withCredentials: true
      });
      updateProfile("")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav>
      {location.pathname === '/admin/login' ? ( // Si estamos en /admin/login
        profile ? ( // Y si hay perfil, mostramos LOGOUT
          <ul id="ulLogged">
            <li className="nav-link active" id="liLogo">
              <Link to="/">
                <img src={logo} alt="Logotipo de FELGTBI+" />
              </Link>
            </li>

            <li onClick={handleLogout} className="nav-link active">
              <FiLogOut className="logout" />
            </li>
          </ul>
        ) : // Si no, no
          <ul id="ulUnLogged">
            <li className="nav-link active" id="liLogo">
              <Link to="/">
                <img src={logo} alt="Logotipo de FELGTBI+" />
              </Link>
            </li>
          </ul>
      ) : // Si estamos en Home
      <ul>
            <li className="nav-link active" id="liLogo">
              <Link to="/">
                <img src={logo} alt="Logotipo de FELGTBI+" />
              </Link>
            </li>
          </ul>
      }
    </nav >
  );
};

export default NavBar;
