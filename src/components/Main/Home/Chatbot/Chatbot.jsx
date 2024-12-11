import React, { useEffect, useState, useContext } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { sendChatBotSociosanitarioData, sendChatBotNoSociosanitarioData } from "../../../../services/chatbotData"
import "../../../../styles/components/_Chatbot.scss"; // Estilos del chatbot
import avatar from "../../../../assets/avatar.png";
import { context } from '../../../../context/context';
import { IoIosArrowBack } from "react-icons/io";

const Chatbot = ({ userType, updateIsSubmitted }) => {
  const { userId } = useContext(context);
  const [steps, setSteps] = useState([]); // Preguntas del chatbot
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Manejo de errores
  const [conversationLog, setConversationLog] = useState([]); // Registro de la conversación


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

  useEffect(() => {
    const fetchSteps = async () => {
      try {

        // Pasos No Sociosanitario
        const stepsDataNoSociosanitario = [
          {
            id: "1",
            message: "¿Cuál es tu situación?",
            trigger: "2", // Trigger a la siguiente pregunta
          },
          {
            id: "2",
            options: [
              { value: "Tengo vih", label: "Tengo vih", trigger: "3" },
              { value: "Creo que me he expuesto al virus", label: "Creo que me he expuesto al virus", trigger: "13" },
              { value: "Quiero saber más sobre el vih/sida", label: "Quiero saber más sobre el vih/sida", trigger: "25" },
              { value: "Estoy apoyando a una persona seropositiva", label: "Estoy apoyando a una persona seropositiva", trigger: "27" },

            ],
          },
          {
            id: "3",
            message: "¿Cuándo te diagnosticaron?",
            trigger: "4",
          },
          {
            id: "4",
            options: [
              { value: "Hace menos de 6 meses", label: "Hace menos de 6 meses", trigger: "5" },
              { value: "Entre 6 meses y 1 año", label: "Entre 6 meses y 1 año", trigger: "5" },
              { value: "Hace menos de 1 año", label: "Hace menos de 1 año", trigger: "5" },
            ],
          },
          {
            id: "5",
            message: "¿Estás en tratamiento tar?",
            trigger: "6",
          },
          {
            id: "6",
            options: [
              { value: "Sí", label: "Sí", trigger: "7" },
              { value: "No", label: "No", trigger: "7", },
              { value: "No estoy segure", label: "No estoy segure", trigger: "7", },

            ],
          },
          {
            id: "7",
            message: "¿Has compartido tu diagnóstico con alguien?",
            trigger: "8",
          },
          {
            id: "8",
            options: [
              { value: "Une amigue", label: "Une amigue", trigger: "9" },
              { value: "Alguien de mi familia", label: "Alguien de mi familia", trigger: "9" },
              { value: "Mi pareja en ese momento", label: "Mi pareja en ese momento", trigger: "9" },
              { value: "Compañere de trabajo", label: "Compañere de trabajo", trigger: "9" },
              { value: "Con mi superior del trabajo", label: "Con mi superior del trabajo", trigger: "9" },
              { value: "Personal de ONG", label: "Personal de ONG", trigger: "9" },
              { value: "Expareja", label: "Expareja", trigger: "9" },
              { value: "Nadie", label: "Nadie", trigger: "9" },
            ],
          },
          {
            id: "9",
            message: "¿Tienes acceso a recursos locales o grupos de apoyo?",
            trigger: "10",
          },
          {
            id: "10",
            options: [
              { value: "Sí", label: "Sí", trigger: "11" },
              { value: "No", label: "No", trigger: "11" },
            ],
          },
          {
            id: "11",
            message: "¿Tienes acceso a personal sanitario?",
            trigger: "12", 
          },
          {
            id: "12",
            options: [
              { value: "Sí", label: "Sí", trigger: "31" },
              { value: "No", label: "No", trigger: "31" },
            ],
          },
          {
            id: "31",
            message: "¿Quieres más información sobre algún tema?",
            trigger: "32",
          },
          {
            id: "32",
            options: [
              { value: "Opciones de tratamiento", label: "Opciones de tratamiento", "end": true },
              { value: "Apoyo psicológico", label: "Apoyo psicológico", "end": true },
              { value: "Derechos laborales y legales", label: "Derechos laborales y legales", "end": true },
              { value: "Grupos de apoyo", label: "Grupos de apoyo", "end": true },
              { value: "Prevención de transmisión", label: "Prevención de transmisión", "end": true },
            ],
          },
          {
            id: "13",
            message: "¿Cuándo ocurrió la posible infección?",
            trigger: "14",
          },
          {
            id: "14",
            options: [
              { value: "Últimas 72 horas", label: "Últimas 72 horas", trigger: "15" },
              { value: "Hace más de 72 horas", label: "Hace más de 72 horas", trigger: "15" },

            ],
          },
          {
            id: "15",
            message: "¿Tienes acceso a personal sanitario?",
            trigger: "16", 
          },
          {
            id: "16",
            options: [
              { value: "Sí", label: "Sí", trigger: "17" },
              { value: "No", label: "No", trigger: "17" },

            ],
          },
          {
            id: "17",
            message: "¿Qué tipo de exposición fue?",
            trigger: "18",
          },
          {
            id: "18",
            options: [
              { value: "No estoy segure", label: "No estoy segure",  trigger: "19" },
              { value: "Relación sexual", label: "Relación sexual",  trigger: "19" },
              { value: "Aguja compartida", label: "Aguja compartida",  trigger: "19" },
              { value: "Contacto con fluidos corporales (sangre, lactancia natural, ...)", label: "Contacto con fluidos corporales (sangre, lactancia natural, ...)",  trigger: "19" },
            ],
          },
          {
            id: "19",
            message: "¿Ha sido en un entorno de 'chem-sex'?",
            trigger: "20",
          },
          {
            id: "20",
            options: [
              { value: "Sí", label: "Sí", trigger: "21" },
              { value: "No", label: "No", trigger: "21" },

            ],
          },
          {
            id: "21",
            message: "¿Sabes qué es la PEP?",
            trigger: "22",
          },
          {
            id: "22",
            options: [
              { value: "Sí, quiero más información", label: "Sí, quiero más información", trigger: "23" },
              { value: "No, ¿qué es?", label: "No, qué es?", trigger: "23" },
            ],
          },
          {
            id: "23",
            message: "¿Has compartido tu preocupación con alguien?",
            trigger: "24",
          },
          {
            id: "24",
            options: [
              { value: "Une amigue", label: "Une amigue", "end": true },
              { value: "Alguien de mi familia", label: "Alguien de mi familia", "end": true },
              { value: "Mi pareja en ese momento", label: "Mi pareja en ese momento", "end": true },
              { value: "Compañere de trabajo", label: "Compañere de trabajo", "end": true },
              { value: "Con mi superior del trabajo", label: "Con mi superior del trabajo", "end": true },
              { value: "Personal de ONG", label: "Personal de ONG", "end": true },
              { value: "Expareja", label: "Expareja", "end": true },
              { value: "Nadie", label: "Nadie", "end": true },
              // { value: "La persona que me preocupa", label: "La persona que me preocupa", "end": true },
            ],
          },
          {
            id: "25",
            message: "¿Necesitas recursos de referencia?",
            trigger: "26",
          },
          {
            id: "26",
            options: [
              { value: "¿Qué es el vih/sida?", label: "¿Qué es el vih/sida?", "end": true },
              { value: "Formas de transmisión", label: "Formas de transmisión", "end": true },
              { value: "Métodos de prevención", label: "Métodos de prevención", "end": true },
              { value: "Impacto del tratamiento", label: "Impacto del tratamiento", "end": true },
              { value: "Historia del vih", label: "Historia del vih", "end": true },
            ],
          },
          {
            id: "27",
            message: "¿Tiene acceso a recursos locales o grupos de apoyo?",
            trigger: "28",
          },
          {
            id: "28",
            options: [
              { value: "Sí", label: "Sí", trigger: "29" },
              { value: "No", label: "No", trigger: "29" },
            ],
          },
          {
            id: "29",
            message: "¿Has compartido tu preocupación sobre esta persona con alguien?",
            trigger: "30",
          },
          {
            id: "30",
            options: [
              { value: "Une amigue", label: "Une amigue", "end": true },
              { value: "Algún familiar", label: "Algún familiar", "end": true },
              { value: "Mi pareja en ese momento", label: "Mi pareja en ese momento", "end": true },
              { value: "Compañere de trabajo", label: "Compañere de trabajo", "end": true },
              { value: "Con mi superior del trabajo", label: "Con mi superior del trabajo", "end": true},
              { value: "Personal de ONG", label: "Personal de ONG", "end": true },
              { value: "Expareja", label: "Expareja", "end": true },
              { value: "Nadie", label: "Nadie", "end": true },
              // { value: "La persona que me preocupa", label: "La persona que me preocupa", "end": true },
            ],
          },

        ];

        // Pasos Sociosanitario
        const stepsDataSociosanitario = [
          {
            id: "1",
            message: "Especialidad",
            trigger: "2",
          },
          {
            id: "2",
            options: [
              { value: "Personal sanitario", label: "Personal sanitario", trigger: "3" },
              { value: "Trabajo social", label: "Trabajo social", trigger: "5" },
              { value: "Psicología", label: "Psicología", trigger: "7" },
              { value: "Educación", label: "Educación", trigger: "9" },
              { value: "Voluntariado y cuidados", label: "Voluntariado y cuidados", trigger: "11" },
            ],
          },
          {
            id: "3",
            message: "¿Qué necesitas?",
            trigger: "4",
          },
          {
            id: "4",
            options: [
              { value: "Manejo clínico de personas con vih", label: "Manejo clínico de personas con vih", "end": true },
              { value: "Protocolo PEP", label: "Protocolo PEP", "end": true },
              { value: "Tratamientos (PREP, TAR)", label: "Tratamientos (PREP, TAR)", "end": true },
              { value: "Prevención de infecciones oportunistas", label: "Prevención de infecciones oportunistas", "end": true },
              { value: "Consejos sobre adherencia al tratamiento", label: "Consejos sobre adherencia al tratamiento", "end": true },
            ],
          },
          {
            id: "5",
            message: "¿Qué necesitas?",
            trigger: "6", 
          },
          {
            id: "6",
            options: [
              { value: "Acceso a medicamentos y servicios", label: "Acceso a medicamentos y servicios", "end": true },
              { value: "Recursos legales y derechos", label: "Recursos legales y derechos", "end": true },
              { value: "Apoyo a personas en situación de vulnerabilidad", label: "Apoyo a personas en situación de vulnerabilidad", "end": true },
              { value: "Conexión con grupos de apoyo comunitario", label: "Conexión con grupos de apoyo comunitario", "end": true },
              { value: "Información sobre redes de servicios sociales", label: "Información sobre redes de servicios sociales", "end": true },
            ],
          },
          {
            id: "7",
            message: "¿Qué necesitas?",
            trigger: "8", 
          },
          {
            id: "8",
            options: [
              { value: "Apoyo emocional para personas recién diagnosticadas", label: "Apoyo emocional para personas recién diagnosticadas", "end": true },
              { value: "Intervencón para adherencia al tratamiento", label: "Intervención para adherencia al tratamiento", "end": true },
              { value: "Manejo del estigma y problemas de salud mental", label: "Manejo del estigma y problemas de salud mental", "end": true },
              { value: "Recursos para personas con vih", label: "Recursos para personas con vih", "end": true  },
              { value: "Consejos de prevención y autocuidado", label: "Consejos de prevención y autocuidado", "end": true  },
            ],
          },
          {
            id: "9",
            message: "¿Qué necesitas?",
            trigger: "10", 
          },
          {
            id: "10",
            options: [
              { value: "Material educativo sobre vih", label: "Material educativo sobre vih", "end": true },
              { value: "Capacitación en prevención", label: "Capacitación en prevención", "end": true },
              { value: "Métodos para combatir el estigma", label: "Métodos para combatir el estigma", "end": true },
              { value: "Recursos para sensibilización", label: "Recursos para sensibilización", "end": true },
              { value: "Estadísticas y datos actualizados", label: "Estadísticas y datos actualizados", "end": true },
            ],
          },
          {
            id: "11",
            message: "¿Qué necesitas?",
            trigger: "12", 
          },
          {
            id: "12",
            options: [
              { value: "Conexión con grupos de apoyo comunitario", label: "Conexión con grupos de apoyo comunitario", "end": true },
              { value: "Información básica sobre vih", label: "Información básica sobre vih", "end": true },
              { value: "Consejos para apoyar emocionalmente", label: "Consejos para apoyar emocionalmente", "end": true },
              { value: "Recursos legales y sociales para personas seropositivas", label: "Recursos legales y sociales para personas seropositivas", "end": true },
              { value: "Métodos de autocuidado para quien cuida", label: "Métodos de autocuidado para quien cuida", "end": true },         
            ],
          },

        ];

        if (userType === 'sociosanitario') {
          setSteps(stepsDataSociosanitario);
        } else {
          setSteps(stepsDataNoSociosanitario);
        }
        setLoading(false); // Detiene el estado de carga
      } catch (err) {
        console.error("Error al cargar las preguntas del chatbot:", err);
        setError("No se pudieron cargar las preguntas del chatbot.");
        setLoading(false); // Detiene el estado de carga incluso si hay error
      }
    };

    fetchSteps();
  }, [userType]);


  // Spinner de carga
  const Spinner = () => (
    <div className="loader">
      <style>
        {`
          .loader {
            width: 100px;
            height: 75px;
            margin: 0 auto;
            background: #fff;
            position: relative;
            border-radius: 100%;
          }
          .loader:before {
            content: '';
            position: absolute;
            box-sizing: border-box;
            border: 15px solid transparent;
            border-top: 25px solid #fff;
            transform: rotate(45deg);
            top: 50px;
            left: -15px;
          }
          .loader:after {
            content: '';
            width: 12px;
            height: 12px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background-color: #FF3D00;
            box-shadow: 20px 0 #FF3D00, -20px 0 #FF3D00;
            animation: flash 0.5s ease-out infinite alternate;
          }
          @keyframes flash {
            0% {
              background-color: rgba(255, 60, 0, 0.25);
              box-shadow: 20px 0 rgba(255, 60, 0, 0.25), -20px 0 #FF3D00;
            }
            50% {
              background-color: #FF3D00;
              box-shadow: 20px 0 rgba(255, 60, 0, 0.25), -20px 0 rgba(255, 60, 0, 0.25);
            }
            100% {
              background-color: rgba(255, 60, 0, 0.25);
              box-shadow: 20px 0 #FF3D00, -20px 0 rgba(255, 60, 0, 0.25);
            }
          }
        `}
      </style>
    </div>
  );

  const handleClickBot = (e) => {
    console.log(e.target)
  };

  if (loading) return <Spinner />; // Muestra el spinner mientras carga

  function formatToDataObject(array) {
    return { data: array };
  }

  const handleEnd = async ({ steps, values }) => {
    const log = steps.filter((step, index) => [
      step.message !== null,
      // values[index] || null,
    ]).map(step => step.message);
    log.unshift(userId);
    const logFormated = formatToDataObject(log);
    setConversationLog(logFormated);
    console.log(logFormated)

    userType === "sociosanitario" ? await sendChatBotSociosanitarioData(log) : await sendChatBotNoSociosanitarioData(log)

  };

  if (loading) return <HeartSpinner />;

  if (error) return <div>{error}</div>;

  // ATRÁS BUTTON
  const handleAtras = (e) => {
    updateIsSubmitted(false);
  };


  return (
    <section>
      <article id="back" onClick={handleAtras}>
        <button><IoIosArrowBack className="iconBack" />Inicio</button>
      </article>
      <ThemeProvider theme={theme}>
        <div className="chatbot-container">
          <ChatBot
            steps={steps}
            handleEnd={handleEnd}
            botAvatar={avatar}
            userAvatar={avatar}
            style={{
              width: "400px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f5f8fb",
            }}
          />
        </div>
      </ThemeProvider>
    </section>
  );
};

export default Chatbot;