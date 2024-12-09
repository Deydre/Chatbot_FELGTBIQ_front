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
    {
        "id": "16",
        "message": "¿Qué necesitas como Personal Sanitario?",
        "options": [
            {
                "value": "1",
                "label": "Manejo clínico de pacientes con vih",
                "end": true
            },
            {
                "value": "2",
                "label": "Protocolo PEP",
                "end": true
            },
            {
                "value": "3",
                "label": "Tratamientos (PREP, TAR)",
                "end": true
            },
            {
                "value": "4",
                "label": "Prevención de infecciones oportunistas",
                "end": true
            },
            {
                "value": "5",
                "label": "Consejería para adherencia al tratamiento",
                "end": true
            }
        ]
    },
    {
        "id": "19",
        "message": "¿Quieres información sobre algun tema?",
        "options": [
            {
                "value": "39",
                "label": "Opciones de tratamiento",
                "end": true
            },
            {
                "value": "40",
                "label": "Apoyo psicológico",
                "end": true
            },
            {
                "value": "41",
                "label": "Derechos laborales y legales",
                "end": true
            },
            {
                "value": "42",
                "label": "Grupos de apoyo",
                "end": true
            },
            {
                "value": "43",
                "label": "Prevención de transmisión",
                "end": true
            }
        ]
    },
    {
        "id": "2",
        "message": "¿Qué necesitas como Trabajador Social?",
        "options": [
            {
                "value": "6",
                "label": "Acceso a medicamentos o servicios",
                "end": true
            },
            {
                "value": "7",
                "label": "Recursos legales y derechos",
                "end": true
            },
            {
                "value": "8",
                "label": "Apoyo a personas en situación de vulnerabilidad",
                "end": true
            },
            {
                "value": "9",
                "label": "Conexión con grupos de apoyo comunitario",
                "end": true
            },
            {
                "value": "10",
                "label": "Información sobre redes de Servicios Sociales",
                "end": true
            }
        ]
    },
    {
        "id": "19",
        "message": "¿Quieres información sobre algun tema?",
        "options": [
            {
                "value": "39",
                "label": "Opciones de tratamiento",
                "end": true
            },
            {
                "value": "40",
                "label": "Apoyo psicológico",
                "end": true
            },
            {
                "value": "41",
                "label": "Derechos laborales y legales",
                "end": true
            },
            {
                "value": "42",
                "label": "Grupos de apoyo",
                "end": true
            },
            {
                "value": "43",
                "label": "Prevención de transmisión",
                "end": true
            }
        ]
    },
    {
        "id": "7",
        "message": "¿Qué necesitas como Psicologo?",
        "options": [
            {
                "value": "11",
                "label": "Apoyo emocional para personas recién diagnosticadas",
                "end": true
            },
            {
                "value": "12",
                "label": "Intervenciones para adherencia al tratamiento",
                "end": true
            },
            {
                "value": "13",
                "label": "Manejo del estigma y problemas de salud mental",
                "end": true
            },
            {
                "value": "14",
                "label": "Recursos para pacientes con vih y trastornos psicológicos",
                "end": true
            },
            {
                "value": "15",
                "label": "Consejería en prevención y autocuidado",
                "end": true
            }
        ]
    },
    {
        "id": "19",
        "message": "¿Quieres información sobre algun tema?",
        "options": [
            {
                "value": "39",
                "label": "Opciones de tratamiento",
                "end": true
            },
            {
                "value": "40",
                "label": "Apoyo psicológico",
                "end": true
            },
            {
                "value": "41",
                "label": "Derechos laborales y legales",
                "end": true
            },
            {
                "value": "42",
                "label": "Grupos de apoyo",
                "end": true
            },
            {
                "value": "43",
                "label": "Prevención de transmisión",
                "end": true
            }
        ]
    },
    {
        "id": "18",
        "message": "¿Qué necesitas como Educador?",
        "options": [
            {
                "value": "16",
                "label": "Material educativo sobre vih",
                "end": true
            },
            {
                "value": "17",
                "label": "Capacitación en prevención",
                "end": true
            },
            {
                "value": "18",
                "label": "Métodos para combatir el estigma",
                "end": true
            },
            {
                "value": "19",
                "label": "Recursos para sensibilización",
                "end": true
            },
            {
                "value": "20",
                "label": "Estadísticas y datos actualizados",
                "end": true
            }
        ]
    },
    {
        "id": "19",
        "message": "¿Quieres información sobre algun tema?",
        "options": [
            {
                "value": "39",
                "label": "Opciones de tratamiento",
                "end": true
            },
            {
                "value": "40",
                "label": "Apoyo psicológico",
                "end": true
            },
            {
                "value": "41",
                "label": "Derechos laborales y legales",
                "end": true
            },
            {
                "value": "42",
                "label": "Grupos de apoyo",
                "end": true
            },
            {
                "value": "43",
                "label": "Prevención de transmisión",
                "end": true
            }
        ]
    },
    {
        "id": "12",
        "message": "¿Qué necesitas como Voluntario/Cuidador?",
        "options": [
            {
                "value": "9",
                "label": "Conexión con grupos de apoyo comunitario",
                "end": true
            },
            {
                "value": "21",
                "label": "Info básica sobre vih",
                "end": true
            },
            {
                "value": "22",
                "label": "Consejos para apoyar emocionalmente",
                "end": true
            },
            {
                "value": "23",
                "label": "Recursos legales y sociales para pacientes",
                "end": true
            },
            {
                "value": "24",
                "label": "Métodos de autocuidado para cuidadores",
                "end": true
            }
        ]
    },
    {
        "id": "19",
        "message": "¿Quieres información sobre algun tema?",
        "options": [
            {
                "value": "39",
                "label": "Opciones de tratamiento",
                "end": true
            },
            {
                "value": "40",
                "label": "Apoyo psicológico",
                "end": true
            },
            {
                "value": "41",
                "label": "Derechos laborales y legales",
                "end": true
            },
            {
                "value": "42",
                "label": "Grupos de apoyo",
                "end": true
            },
            {
                "value": "43",
                "label": "Prevención de transmisión",
                "end": true
            }
        ]
    }
]


  // let data = [
  //   { id: "1", message: "Elige un tema:", trigger: "2" },
  //   {
  //     id: "2",
  //     options: [
  //       { value: "1.1", label: "Tengo VIH", trigger: "3" },
  //       { value: "1.2", label: "Creo que me he expuesto al virus", trigger: "4" },
  //       { value: "2.1", label: "Personal sanitario", trigger: "5" },
  //       { value: "2.2", label: "Unicornio", trigger: "6" },
  //       { value: "2.5", label: "Oyente", trigger: "7" }
  //     ]
  //   },
  
  //   // Preguntas de "Tengo VIH"
  //   { id: "3", message: "¿Cuándo te diagnosticaron?", trigger: "8" },
  //   {
  //     id: "8",
  //     options: [
  //       { value: "Hace menos de 6 meses", label: "Hace menos de 6 meses", trigger: "9" },
  //       { value: "Entre 6 meses y un año", label: "Entre 6 meses y un año", trigger: "9" },
  //       { value: "Hace más de un año", label: "Hace más de un año", trigger: "9" }
  //     ]
  //   },
  //   { id: "9", message: "¿Estás en tratamiento TAR?", trigger: "10" },
  //   {
  //     id: "10",
  //     options: [
  //       { value: "Sí", label: "Sí", trigger: "11" },
  //       { value: "No", label: "No", trigger: "11" },
  //       { value: "No estoy seguro", label: "No estoy seguro", trigger: "11" }
  //     ]
  //   },
  //   { id: "11", message: "¿Tienes acceso a un médico?", trigger: "12" },
  //   {
  //     id: "12",
  //     options: [
  //       { value: "Sí", label: "Sí", trigger: "end_1.1" },
  //       { value: "No", label: "No", trigger: "end_1.1" }
  //     ]
  //   },
  
  //   // Preguntas de "Creo que me he expuesto al virus"
  //   { id: "4", message: "¿Cuándo ocurrió la posible infección?", trigger: "13" },
  //   {
  //     id: "13",
  //     options: [
  //       { value: "Últimas 72h", label: "Últimas 72h", trigger: "end_1.2" },
  //       { value: "Hace más de 72h", label: "Hace más de 72h", trigger: "end_1.2" }
  //     ]
  //   },
  
  //   // Preguntas de "Personal sanitario"
  //   { id: "5", message: "¿Qué necesitas?", trigger: "14" },
  //   {
  //     id: "14",
  //     options: [
  //       { value: "Manejo clínico de pacientes con VIH", label: "Manejo clínico de pacientes con VIH", trigger: "end_2.1" },
  //       { value: "Protocolo PEP", label: "Protocolo PEP", trigger: "end_2.1" }
  //     ]
  //   },
  
  //   // Preguntas de "Unicornio"
  //   { id: "6", message: "¿Qué necesitas, juapi?", trigger: "15" },
  //   {
  //     id: "15",
  //     options: [
  //       { value: "Protoco", label: "Protoco", trigger: "end_2.2" },
  //       { value: "Unicornio mazo flama loco", label: "Unicornio mazo flama loco", trigger: "end_2.2" }
  //     ]
  //   },
  
  //   // Preguntas de "Oyente"
  //   { id: "7", message: "¿Qué necesitas?", trigger: "16" },
  //   {
  //     id: "16",
  //     options: [
  //       { value: "Conocer más del tema", label: "Conocer más del tema", trigger: "end_2.5" },
  //       { value: "Pág web", label: "Pág web", trigger: "end_2.5" }
  //     ]
  //   },
  
  //   // Finalización de la conversación
  //   { id: "end_1.1", message: "Gracias por compartir. ¡Que tengas un buen día!", end: true },
  //   { id: "end_1.2", message: "Gracias por compartir. ¡Que tengas un buen día!", end: true },
  //   { id: "end_2.1", message: "Gracias por compartir. ¡Que tengas un buen día!", end: true },
  //   { id: "end_2.2", message: "Gracias por compartir. ¡Que tengas un buen día!", end: true },
  //   { id: "end_2.5", message: "Gracias por compartir. ¡Que tengas un buen día!", end: true }
  // ];
  

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
