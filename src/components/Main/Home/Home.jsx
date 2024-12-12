import React, { useState } from "react";
import Formulario from "./Formulario/Formulario";
import Chatbot from "./Chatbot/Chatbot";


const Home = () => {
  const [formData, setFormData] = useState(null); // Datos del formulario
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado del formulario
  const [userType, setUserType] = useState(""); // "sociosanitario" o "no sociosanitario"


  const updateUserType = (data) => {
    setUserType(data);
  };

  const updateIsSubmitted = (data) => {
    setIsSubmitted(data);
  };

 
  return (
    <section id="FormBot">
     
     {/* Condición para mostrar el formulario o el chatbot */}
      {!isSubmitted ? (
        <Formulario
          updateIsSubmitted={updateIsSubmitted}
          updateUserType={updateUserType}
          userType={userType}
        />
      ) : (
        <Chatbot
          userType={userType}
          updateIsSubmitted={updateIsSubmitted}
          formData={formData}
        />
      )}

    </section>
  );
};

export default Home;
