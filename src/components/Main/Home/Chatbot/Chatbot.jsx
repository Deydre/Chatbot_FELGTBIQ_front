import React, { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import HeartSpinner from "../HeartSpinner/HeartSpinner"; // Spinner
import { ThemeProvider } from "styled-components";
import "../../../../styles/components/_Chatbot.scss"; // Estilos del chatbot
import avatar from "../../../../assets/avatar.png"

const Chatbot = ({ userType, formData }) => {
  const [steps, setSteps] = useState([]); // Preguntas del chatbot
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Manejo de errores

  // Tema personalizado del chatbot
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#E2007E", // Color del header
    headerFontColor: "#fff",
    botBubbleColor: "#E2007E", // Burbuja del bot
    botFontColor: "#fff", // Texto del bot
    userBubbleColor: "#ffa9da", // Burbuja del usuario
    userFontColor: "#000", // Texto del usuario
  };

  useEffect(() => {
    const simulateSteps = () => {
      if (userType === "sociosanitario") {
        return [
          { id: "1", message: "¿Cuál es tu especialidad médica?", trigger: "2" },
          {
            id: "2",
            options: [
              { value: "cardiología", label: "Cardiología", trigger: "3" },
              { value: "neurología", label: "Neurología", trigger: "3" },
              { value: "otra", label: "Otra", trigger: "3" },
            ],
          },
          { id: "3", message: "¿Cuántos años de experiencia tienes?", trigger: "4" },
          {
            id: "4",
            options: [
              { value: "1-5", label: "1-5 años", trigger: "5" },
              { value: "6-10", label: "6-10 años", trigger: "5" },
              { value: "11+", label: "Más de 10 años", trigger: "5" },
            ],
          },
          { id: "5", message: "Gracias por tu tiempo.", end: true },
        ];
      } else {
        return [
          { id: "1", message: "¿A qué te dedicas?", trigger: "2" },
          {
            id: "2",
            options: [
              { value: "estudiante", label: "Estudiante", trigger: "3" },
              { value: "trabajador", label: "Trabajador", trigger: "3" },
              { value: "desempleado", label: "Desempleado", trigger: "3" },
            ],
          },
          { id: "3", message: "¿Cuál es tu nivel de estudios?", trigger: "4" },
          {
            id: "4",
            options: [
              { value: "primaria", label: "Primaria", trigger: "5" },
              { value: "secundaria", label: "Secundaria", trigger: "5" },
              { value: "universidad", label: "Universidad", trigger: "5" },
            ],
          },
          { id: "5", message: "Gracias por compartir.", end: true },
        ];
      }
    };

    const fetchSteps = async () => {
      try {
        const simulatedResponse = new Promise((resolve) =>
          setTimeout(() => resolve(simulateSteps()), 1000)
        );
        const stepsFromApi = await simulatedResponse;

        setSteps(stepsFromApi); // Actualiza las preguntas
        setLoading(false); // Detiene el estado de carga
      } catch (err) {
        console.error("Error al cargar las preguntas simuladas:", err);
        setError("No se pudieron cargar las preguntas del chatbot.");
        setLoading(false); // Detiene el estado de carga incluso si hay error
      }
    };

    fetchSteps();
  }, [userType, formData]);

  if (loading) return <HeartSpinner />; // Muestra el spinner mientras carga
  if (error) return <div>{error}</div>;

  return (
    <ThemeProvider theme={theme}>
      <div className="chatbot-container">
        <ChatBot
          steps={steps}
          botAvatar={avatar} // Avatar del bot
          userAvatar={avatar}// Avatar del usuario
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
