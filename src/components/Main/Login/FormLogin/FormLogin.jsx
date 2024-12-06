import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import { context } from "../../../../context/context";

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
    navigate(`admin/dashboard`)
  }

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Llamada a la api con los datos del form para hacer login
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/admin/login',
        data: { email, password },
        withCredentials: true
      });

      // En las futuras solicitudes por axios se enviará encabezado el token
      const authHeader = response.headers.authorization;
      axios.defaults.headers.common['Authorization'] = authHeader;

      try {
        const response = await axios(`http://localhost:3000/api/admin/me`, {
          withCredentials: true
        });
        updateProfile(response.data[0])
      } catch {
        
      }

      loginRedirect();

    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };



  //email, password

  return <div className="login">
    {loading ? (
      <HashLoader color="#fff" />
    ) : (
      <>
        <article id="divLogin">
          <div>
            <h2>Inicio de sesión</h2>
          </div>
          <div>
            <input type="text" placeholder="email" onChange={handleEmail} />
            <input type="password" placeholder="contraseña" onChange={handlePassword} />
            <input type="password" placeholder="repite la contraseña" onChange={handlePassword} />
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
