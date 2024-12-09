import React, { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import HeartSpinner from "../HeartSpinner/HeartSpinner"; // Spinner
import { ThemeProvider } from "styled-components";
import "../../../../styles/components/_Chatbot.scss"; // Estilos del chatbot
import avatar from "../../../../assets/avatar.png";

const Chatbot = ({ apiEndpoint }) => {
  const [steps, setSteps] = useState([]); // Preguntas del chatbot
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Manejo de errores

  // Tema personalizado del chatbot
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Montserrat, Helvetica, sans-serif",
    headerBgColor: "#E2007E", // Color del header
    headerFontColor: "#fff",
    botBubbleColor: "#E2007E", // Burbuja del bot
    botFontColor: "#fff", // Texto del bot
    userBubbleColor: "#ffd2eb", // Burbuja del usuario
    userFontColor: "#E2007E", // Texto del usuario
  };

  let data = []



  useEffect(() => {
    const fetchSteps = async () => {
      try {
        // const response = await fetch(apiEndpoint); // Llamada a la API
        // const data = await response.json(); // JSON dinámico desde la API

        // const stepsFromApi = transformDataToSteps(data); // Transformar JSON a steps
        setSteps(data); // Actualiza las preguntas
        setLoading(false); // Detiene el estado de carga
      } catch (err) {
        console.error("Error al cargar las preguntas del chatbot:", err);
        setError("No se pudieron cargar las preguntas del chatbot.");
        setLoading(false); // Detiene el estado de carga incluso si hay error
      }
    };

    fetchSteps();
  }, [apiEndpoint]);

  if (loading) return <HeartSpinner />; // Muestra el spinner mientras carga
  if (error) return <div>{error}</div>;

  return (
    <ThemeProvider theme={theme}>
      <div className="chatbot-container">
        <ChatBot
          steps={steps}
          botAvatar={avatar} // Avatar del bot
          userAvatar={avatar} // Avatar del usuario
          style={{
            width: "400px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f5f8fb",
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default Chatbot;







// import React, { useEffect, useState } from "react";
// import ChatBot from "react-simple-chatbot";
// import axios from "axios";

// const Chatbot = ({ userType, formData }) => {
//   const [steps, setSteps] = useState([]); // Estado para almacenar las preguntas
//   const [loading, setLoading] = useState(true); // Estado de carga
//   const [error, setError] = useState(null); // Estado para manejar errores

//   useEffect(() => {
//     // Define el endpoint dinámico basado en userType
//     const endpoint =
//       userType === "sociosanitario"
//         ? "https://api.example.com/chatbot-steps/sociosanitario"
//         : "https://api.example.com/chatbot-steps/no-sociosanitario";

//     const fetchSteps = async () => {
//       try {
//         // Realiza la llamada al endpoint dinámico
//         const response = await axios.get(endpoint, {
//           params: { formData }, // Envía los datos del formulario si es necesario
//         });

//         setSteps(response.data); // Actualiza las preguntas del chatbot
//         setLoading(false); // Detiene el estado de carga
//       } catch (err) {
//         console.error("Error al cargar las preguntas:", err);
//         setError("No se pudieron cargar las preguntas del chatbot.");
//         setLoading(false); // Detiene el estado de carga incluso si hay error
//       }
//     };

//     fetchSteps();
//   }, [userType, formData]); // Vuelve a ejecutar si cambian userType o formData

//   // Manejo de estados de carga y error
//   if (loading) return <div>Cargando el chatbot...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div style={{ margin: "20px" }}>
//       <ChatBot steps={steps} />
//     </div>
//   );
// };

// export default Chatbot;
