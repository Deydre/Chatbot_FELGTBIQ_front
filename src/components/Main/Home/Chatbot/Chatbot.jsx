import React, { useEffect, useState, useContext } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "../../../../styles/components/_Chatbot.scss"; // Estilos del chatbot
import avatar from "../../../../assets/avatar.png";
import { context } from '../../../../context/context';
import { ColorRing } from 'react-loader-spinner'; 
import { IoIosArrowBack } from "react-icons/io";
import CustomFinalResponse from "../CustomFinalResponse/CustomFinalResponse"; // Importa el nuevo componente


const Chatbot = ({ apiEndpoint, userType }) => {
  const { userId } = useContext(context);
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Tema personalizado del chatbot
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Montserrat, Helvetica, sans-serif",
    headerBgColor: "#E2007E",
    headerFontColor: "#fff",
    botBubbleColor: "#E2007E",
    botFontColor: "#fff",
    userBubbleColor: "#ffd2eb",
    userFontColor: "#E2007E",
  };

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        
        // Pasos No Sociosanitario
        const stepsDataNoSociosanitario = [
          {
            id: "1",
            message: "¿Cuál es tu situación?",
            trigger: "2",
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
              { value: "No", label: "No", trigger: "7" },
              { value: "No estoy segure", label: "No estoy segure", trigger: "7" },
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
              { value: "Sí", label: "Sí",   trigger: "11"},
              { value: "No", label: "No",   trigger: "11" },
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
              { value: "Sí", label: "Sí", trigger:"31"},
              { value: "No", label: "No", trigger:"31"},     
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
                { value: "Opciones de tratamiento", label: "Opciones de tratamiento", trigger: "dynamicResponse"},
                { value: "Apoyo psicológico", label: "Apoyo psicológico", trigger: "dynamicResponse" },
                { value: "Derechos laborales y legales", label: "Derechos laborales y legales", trigger: "dynamicResponse" },
                { value: "Grupos de apoyo", label: "Grupos de apoyo", trigger: "dynamicResponse" },
                { value: "Prevención de transmisión", label: "Prevención de transmisión", trigger: "dynamicResponse" },
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
              { value: "Contacto con fluidos corporales (sangre, lactancia natural, ...)",  trigger: "19" },
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
              { value: "Sí, quiero más información", label: "Sí, quiero más información",  trigger: "23" },
              { value: "No, ¿qué es?", label: "No, qué es?",  trigger: "23" },
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
              { value: "Une amigue", label: "Une amigue", trigger: "dynamicResponse" },
              { value: "Alguien de mi familia", label: "Alguien de mi familia", trigger: "dynamicResponse" },
              { value: "Mi pareja en ese momento", label: "Mi pareja en ese momento", trigger: "dynamicResponse" },
              { value: "Compañere de trabajo", label: "Compañere de trabajo", trigger: "dynamicResponse" },
              { value: "Con mi superior del trabajo", label: "Con mi superior del trabajo", trigger: "dynamicResponse" },
              { value: "Personal de ONG", label: "Personal de ONG", trigger: "dynamicResponse" },
              { value: "Expareja", label: "Expareja", trigger: "dynamicResponse" },
              { value: "Nadie", label: "Nadie", trigger: "dynamicResponse" },
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
              { value: "¿Qué es el vih/sida?", label: "¿Qué es el vih/sida?",  trigger: "dynamicResponse" },
              { value: "Formas de transmisión", label: "Formas de transmisión",  trigger: "dynamicResponse" },
              { value: "Métodos de prevención", label: "Métodos de prevención", trigger: "dynamicResponse" },
              { value: "Impacto del tratamiento", label: "Impacto del tratamiento",  trigger: "dynamicResponse" },
              { value: "Historia del vih", label: "Historia del vih",  trigger: "dynamicResponse" },
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
              { value: "Sí", label: "Sí",  trigger: "29" },
              { value: "No", label: "No",  trigger: "29" },
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
              { value: "Une amigue", label: "Une amigue", trigger: "dynamicResponse" },
              { value: "Alguien de mi familia", label: "Alguien de mi familia", trigger: "dynamicResponse" },
              { value: "Mi pareja en ese momento", label: "Mi pareja en ese momento", trigger: "dynamicResponse" },
              { value: "Compañere de trabajo", label: "Compañere de trabajo", trigger: "dynamicResponse" },
              { value: "Con mi superior del trabajo", label: "Con mi superior del trabajo", trigger: "dynamicResponse" },
              { value: "Personal de ONG", label: "Personal de ONG", trigger: "dynamicResponse" },
              { value: "Expareja", label: "Expareja", trigger: "dynamicResponse" },
              { value: "Nadie", label: "Nadie", trigger: "dynamicResponse" },
            ],
          },
          // Step final
          {
            id: "dynamicResponse",
            component: <CustomFinalResponse userType={userType} userId={userId} />,
            asMessage: true,
            waitAction: true,
            end: true,
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
              { value: "Manejo clínico de personas con vih", label: "Manejo clínico de personas con vih", trigger: "dynamicResponse" },
              { value: "Protocolo PEP", label: "Protocolo PEP", trigger: "dynamicResponse" },
              { value: "Tratamientos (PREP, TAR)", label: "Tratamientos (PREP, TAR)", trigger: "dynamicResponse" },
              { value: "Prevención de infecciones oportunistas", label: "Prevención de infecciones oportunistas", trigger: "dynamicResponse" },
              { value: "Consejos sobre adherencia al tratamiento", label: "Consejos sobre adherencia al tratamiento", trigger: "dynamicResponse" },
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
              { value: "Acceso a medicamentos y servicios", label: "Acceso a medicamentos y servicios", trigger: "dynamicResponse" },
              { value: "Recursos legales y derechos", label: "Recursos legales y derechos", trigger: "dynamicResponse"  },
              { value: "Apoyo a personas en situación de vulnerabilidad", label: "Apoyo a personas en situación de vulnerabilidad", trigger: "dynamicResponse"  },
              { value: "Conexión con grupos de apoyo comunitario", label: "Conexión con grupos de apoyo comunitario", trigger: "dynamicResponse"  },
              { value: "Información sobre redes de servicios sociales", label: "Información sobre redes de servicios sociales", trigger: "dynamicResponse"},
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
              { value: "Apoyo emocional para personas recién diagnosticadas", label: "Apoyo emocional para personas recién diagnosticadas", trigger: "dynamicResponse" },
              { value: "Intervención para adherencia al tratamiento", label: "Intervención para adherencia al tratamiento", trigger: "dynamicResponse" },
              { value: "Manejo del estigma y salud mental", label: "Manejo del estigma y salud mental", trigger: "dynamicResponse" },
              { value: "Recursos para personas con vih", label: "Recursos para personas con vih", trigger: "dynamicResponse" },
              { value: "Consejos de prevención y autocuidado", label: "Consejos de prevención y autocuidado", trigger: "dynamicResponse" },
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
              { value: "Material educativo sobre vih", label: "Material educativo sobre vih", trigger: "dynamicResponse"},
              { value: "Capacitación en prevención", label: "Capacitación en prevención", trigger: "dynamicResponse" },
              { value: "Métodos para combatir el estigma", label: "Métodos para combatir el estigma", trigger: "dynamicResponse" },
              { value: "Recursos para sensibilización", label: "Recursos para sensibilización", trigger: "dynamicResponse" },
              { value: "Estadísticas y datos actualizados", label: "Estadísticas y datos actualizados", trigger: "dynamicResponse" },
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
              { value: "Conexión con grupos de apoyo comunitario", label: "Conexión con grupos de apoyo comunitario", trigger: "dynamicResponse" },
              { value: "Información básica sobre vih", label: "Información básica sobre vih", trigger: "dynamicResponse" },
              { value: "Consejos para apoyar emocionalmente", label: "Consejos para apoyar emocionalmente", trigger: "dynamicResponse" },
              { value: "Recursos legales y sociales para personas seropositivas", label: "Recursos legales y sociales para personas seropositivas", trigger: "dynamicResponse" },
              { value: "Métodos de autocuidado para quien cuida", label: "Métodos de autocuidado para quien cuida", trigger: "dynamicResponse" },         
            ],
          },
          {
            id: "dynamicResponse",
            component: <CustomFinalResponse userType={userType} userId={userId} />,
            asMessage: true,
            waitAction: true,
            end: true
          },
        ];

        if (userType === 'sociosanitario') {
          setSteps(stepsDataSociosanitario);
        } else {
          setSteps(stepsDataNoSociosanitario);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar las preguntas del chatbot:", err);
        setError("No se pudieron cargar las preguntas del chatbot.");
        setLoading(false);
      }
    };

    fetchSteps();
  }, [userType, userId]);

  if (loading) {
    return <div>
      <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>;
  }
 
//   const handleEnd = async ({ steps, values }) => {
//     const log = steps.filter((step, index) => [
//       step.message !== null,
//       // values[index] || null,
//     ]).map(step => step.message);
//     log.unshift(userId);
//     const logFormated = formatToDataObject(log);
//     setConversationLog(logFormated);
//     console.log(logFormated)

//     userType === "sociosanitario" ? await sendChatBotSociosanitarioData(log) : await sendChatBotNoSociosanitarioData(log)
    
//   };


  const handleAtras = (e) => {
    updateIsSubmitted(false);
  };

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  return (
    <section>
      <article id="back" onClick={handleAtras}>
        <button><IoIosArrowBack className="iconBack" />Inicio</button>
      </article>
      <ThemeProvider theme={theme}>
        <div className="chatbot-container">
          <ChatBot
            steps={steps}
            botAvatar={avatar}
            userAvatar={avatar}
            hideUserInput={true}
            contentStyle={{
              overflowY: "auto" // Para permitir scroll en contenido extenso
            }}
          />
        </div>
      </ThemeProvider>
    </section>
  );
};

export default Chatbot;
