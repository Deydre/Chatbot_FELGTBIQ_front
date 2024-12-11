  import React, { useState } from "react";
  import Formulario from "./Formulario/Formulario";
  import Chatbot from "./Chatbot/Chatbot";

  const Home = () => {
    const [formData, setFormData] = useState(null); // Datos del formulario
    const [isSubmitted, setIsSubmitted] = useState(false); // Estado del formulario
    const [userType, setUserType] = useState(""); // "sociosanitario" o "no sociosanitario"
    const updateUserType = (data) => {
      setUserType(data)
    };
    const updateIsSubmitted = (data) => {
      setIsSubmitted(data)
    };

    // Maneja el envío del formulario
    // const handleFormSubmit = (data, type) => {
    //   setFormData(data); // Guarda los datos del formulario
    //   setUserType(type); // Guarda el tipo de usuario (sociosanitario o no)
    //   setIsSubmitted(true); // Muestra el chatbot
    // };

    return (
      <section>
        {!isSubmitted ? (
          // Muestra el formulario
          <Formulario updateIsSubmitted = {updateIsSubmitted} updateUserType = {updateUserType} userType={userType}/>
        ) : (
          // Muestra el chatbot después de enviar el formulario
          <Chatbot userType={userType} updateIsSubmitted = {updateIsSubmitted}  formData={formData} />
        )}
      </section>
    );
  };

  export default Home;
