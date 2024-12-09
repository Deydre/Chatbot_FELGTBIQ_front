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


  let data = [
    { id: "1", message: "Elige un tema:", trigger: "2" },
    {
      id: "2",
      options: [
        { value: "1.1", label: "Tengo VIH", trigger: "3" },
        { value: "1.2", label: "Creo que me he expuesto al virus", trigger: "4" },
        { value: "2.1", label: "Personal sanitario", trigger: "5" },
        { value: "2.2", label: "Unicornio", trigger: "6" },
        { value: "2.5", label: "Oyente", trigger: "7" }
      ]
    },
  
    // Preguntas de "Tengo VIH"
    { id: "3", message: "¿Cuándo te diagnosticaron?", trigger: "8" },
    {
      id: "8",
      options: [
        { value: "Hace menos de 6 meses", label: "Hace menos de 6 meses", trigger: "9" },
        { value: "Entre 6 meses y un año", label: "Entre 6 meses y un año", trigger: "9" },
        { value: "Hace más de un año", label: "Hace más de un año", trigger: "9" }
      ]
    },
    { id: "9", message: "¿Estás en tratamiento TAR?", trigger: "10" },
    {
      id: "10",
      options: [
        { value: "Sí", label: "Sí", trigger: "11" },
        { value: "No", label: "No", trigger: "11" },
        { value: "No estoy seguro", label: "No estoy seguro", trigger: "11" }
      ]
    },
    { id: "11", message: "¿Tienes acceso a un médico?", trigger: "12" },
    {
      id: "12",
      options: [
        { value: "Sí", label: "Sí", trigger: "end_1.1" },
        { value: "No", label: "No", trigger: "end_1.1" }
      ]
    },
  
    // Preguntas de "Creo que me he expuesto al virus"
    { id: "4", message: "¿Cuándo ocurrió la posible infección?", trigger: "13" },
    {
      id: "13",
      options: [
        { value: "Últimas 72h", label: "Últimas 72h", trigger: "end_1.2" },
        { value: "Hace más de 72h", label: "Hace más de 72h", trigger: "end_1.2" }
      ]
    },
  
    // Preguntas de "Personal sanitario"
    { id: "5", message: "¿Qué necesitas?", trigger: "14" },
    {
      id: "14",
      options: [
        { value: "Manejo clínico de pacientes con VIH", label: "Manejo clínico de pacientes con VIH", trigger: "end_2.1" },
        { value: "Protocolo PEP", label: "Protocolo PEP", trigger: "end_2.1" }
      ]
    },
  
    // Preguntas de "Unicornio"
    { id: "6", message: "¿Qué necesitas, juapi?", trigger: "15" },
    {
      id: "15",
      options: [
        { value: "Protoco", label: "Protoco", trigger: "end_2.2" },
        { value: "Unicornio mazo flama loco", label: "Unicornio mazo flama loco", trigger: "end_2.2" }
      ]
    },
  
    // Preguntas de "Oyente"
    { id: "7", message: "¿Qué necesitas?", trigger: "16" },
    {
      id: "16",
      options: [
        { value: "Conocer más del tema", label: "Conocer más del tema", trigger: "end_2.5" },
        { value: "Pág web", label: "Pág web", trigger: "end_2.5" }
      ]
    },
  
    // Finalización de la conversación
    { id: "end_1.1", message: "Gracias por compartir. ¡Que tengas un buen día!", end: true },
    { id: "end_1.2", message: "Gracias por compartir. ¡Que tengas un buen día!", end: true },
    { id: "end_2.1", message: "Gracias por compartir. ¡Que tengas un buen día!", end: true },
    { id: "end_2.2", message: "Gracias por compartir. ¡Que tengas un buen día!", end: true },
    { id: "end_2.5", message: "Gracias por compartir. ¡Que tengas un buen día!", end: true },
  ];
  

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
