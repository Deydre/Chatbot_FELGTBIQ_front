import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { context } from "../../../../context/context";
import { fetchHandleLogin, getAdminData } from "../../../../services/formLoginAdmin"

const FormLogin = () => {

  const navigate = useNavigate();
  const { updateProfile } = useContext(context);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");


  useEffect(() => {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailValidation.test(email) && email.length > 0) {
      setEmailMessage("El email debe tener un formato válido");
    } else {
      setEmailMessage("");
    }
  }, [email])

  useEffect(() => {
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    if (!passwordValidation.test(password) && password.length > 0) {
      setPasswordMessage("La contraseña debe contener minúsculas, mayúsculas, números y al menos 8 caracteres.");
    } else {
      setPasswordMessage("");
    }
  }, [password])

  const loginRedirect = () => {
    navigate(`/admin/dashboard`)
  }

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Llamada al servicio de login
      const response = await fetchHandleLogin(email, password);
      console.log({ response });

      // En las futuras solicitudes por axios se enviará encabezado el token
      const authHeader = response.headers.authorization;
      axios.defaults.headers.common['Authorization'] = authHeader;

      try {
        const adminData = await getAdminData();
        console.log(adminData);

        updateProfile(adminData.data[0].email);


      } catch (error) {
        console.log("Error al obtener datos de admin:", error.message);
      }

      loginRedirect();

    } catch (error) {
      setMessage("Credenciales no válidas")
      console.log(error.message);
    }
    setLoading(false);
  };

  const SpinnerLogin = () => (
    <div className="loader">
      <style>
        {`
          .loader {
          width: 48px;
          height: 48px;
          display: inline-block;
          position: relative;
        }
          .loader::after,
          .loader::before {
          content: '';  
          box-sizing: border-box;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid #FFF;
          position: absolute;
          left: 0;
          top: 0;
          animation: animloader 2s linear infinite;
        }
         .loader::after {
          animation-delay: 1s;
        }

        @keyframes animloader {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
        `}
      </style>
    </div>
  );

  return <div className="login">
    {loading ? (
      <SpinnerLogin/>
    ) : (
      <>
        <article id="divLogin">
          <div>
            <h2>Inicio de sesión</h2>
          </div>
          <div>
            <input type="text" placeholder="email" onChange={handleEmail} />
            <input type="password" placeholder="contraseña" onChange={handlePassword} />
            <button onClick={handleLogin}>LOGIN</button>
            {emailMessage && <h6>{emailMessage}</h6>}
            {passwordMessage && <h6>{passwordMessage}</h6>}
            <h6>{message}</h6>
          </div>
        </article>

      </>
    )}
  </div>;

};

export default FormLogin;
