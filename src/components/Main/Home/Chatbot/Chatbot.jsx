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
              { value: "Algún familiar", label: "Algún familiar", trigger: "9" },
              { value: "Mi pareja en ese momento", label: "Mi pareja en ese momento", trigger: "9" },
              { value: "Compañere de trabajo", label: "Compañere de trabajo", trigger: "9" },
              { value: "Con mi jefe", label: "Con mi jefe", trigger: "9" },
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
            message: "¿Tienes acceso a un médico?",
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
              { value: "Opciones de tratamiento", label: "Opciones de tratamiento", trigger: "dynamicResponse" },
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
            message: "¿Tienes acceso a un médico?",
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
              { value: "No estoy segure", label: "No estoy segure", trigger: "19" },
              { value: "Relación sexual", label: "Relación sexual", trigger: "19" },
              { value: "Aguja compartida", label: "Aguja compartida", trigger: "19" },
              { value: "Contacto con fluidos corporales (sangre, leche materna, ...)", label: "Contacto con fluidos corporales (sangre, leche materna, ...)", trigger: "19" },
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
              { value: "Une amigue", label: "Une amigue", trigger: "dynamicResponse" },
              { value: "Algún familiar", label: "Algún familiar", trigger: "dynamicResponse" },
              { value: "Mi pareja en ese momento", label: "Mi pareja en ese momento", trigger: "dynamicResponse" },
              { value: "Compañere de trabajo", label: "Compañere de trabajo", trigger: "dynamicResponse" },
              { value: "Con mi jefe", label: "Con mi jefe", trigger: "dynamicResponse" },
              { value: "Personal de ONG", label: "Personal de ONG", trigger: "dynamicResponse" },
              { value: "Expareja", label: "Expareja", trigger: "dynamicResponse" },
              { value: "Nadie", label: "Nadie", trigger: "dynamicResponse" },
              { value: "La persona que me preocupa", label: "La persona que me preocupa", trigger: "dynamicResponse" },
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
              { value: "¿Qué es el vih/sida?", label: "¿Qué es el vih/sida?", trigger: "dynamicResponse" },
              { value: "Formas de transmisión", label: "Formas de transmisión", trigger: "dynamicResponse" },
              { value: "Métodos de prevención", label: "Métodos de prevención", trigger: "dynamicResponse" },
              { value: "Impacto del tratamiento", label: "Impacto del tratamiento", trigger: "dynamicResponse" },
              { value: "Historia del vih", label: "Historia del vih", trigger: "dynamicResponse" },
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
              { value: "Une amigue", label: "Une amigue", trigger: "dynamicResponse" },
              { value: "Algún familiar", label: "Algún familiar", trigger: "dynamicResponse" },
              { value: "Mi pareja en ese momento", label: "Mi pareja en ese momento", trigger: "dynamicResponse" },
              { value: "Compañere de trabajo", label: "Compañere de trabajo", trigger: "dynamicResponse" },
              { value: "Con mi jefe", label: "Con mi jefe", trigger: "dynamicResponse" },
              { value: "Personal de ONG", label: "Personal de ONG", trigger: "dynamicResponse" },
              { value: "Expareja", label: "Expareja", trigger: "dynamicResponse" },
              { value: "Nadie", label: "Nadie", trigger: "dynamicResponse" },
              { value: "La persona que me preocupa", label: "La persona que me preocupa", trigger: "dynamicResponse" },
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
              { value: "Trabajador social", label: "Trabajador social", trigger: "5" },
              { value: "Psicólogo", label: "Psicólogo", trigger: "7" },
              { value: "Educador", label: "Educador", trigger: "9" },
              { value: "Voluntarios y cuidadores", label: "Voluntarios y cuidadores", trigger: "11" },
            ],
          },
          {
            id: "3",
            message: "¿Qué necesitas como personal sanitario?",
            trigger: "4",
          },
          {
            id: "4",
            options: [
              { value: "Manejo clínico de pacientes con vih", label: "Manejo clínico de pacientes con vih", trigger: "dynamicResponse" },
              { value: "Protocolo PEP", label: "Protocolo PEP", trigger: "dynamicResponse" },
              { value: "Tratamientos (PREP, TAR)", label: "Tratamientos (PREP, TAR)", trigger: "dynamicResponse" },
              { value: "Prevención de infecciones oportunistas", label: "Prevención de infecciones oportunistas", trigger: "dynamicResponse" },
              { value: "Consejería para adherencia al tratamiento", label: "Consejería para adherencia al tratamiento", trigger: "dynamicResponse" },
            ],
          },
          {
            id: "5",
            message: "¿Qué necesitas como trabajador social?",
            trigger: "6",
          },
          {
            id: "6",
            options: [
              { value: "Acceso a medicamentos y servicios", label: "Acceso a medicamentos y servicios", trigger: "dynamicResponse" },
              { value: "Recursos legales y derechos", label: "Recursos legales y derechos", trigger: "dynamicResponse" },
              { value: "Apoyo a personas en situación de vulnerabilidad", label: "Apoyo a personas en situación de vulnerabilidad", trigger: "dynamicResponse" },
              { value: "Conexión con grupos de apoyo comunitario", label: "Conexión con grupos de apoyo comunitario", trigger: "dynamicResponse" },
              { value: "Información sobre redes de servicios sociales", label: "Información sobre redes de servicios sociales", trigger: "dynamicResponse" },
            ],
          },
          {
            id: "7",
            message: "¿Qué necesitas como psicólogo?",
            trigger: "8",
          },
          {
            id: "8",
            options: [
              { value: "Apoyo emocional para personas recién diagnosticadas", label: "Apoyo emocional para personas recién diagnosticadas", trigger: "dynamicResponse" },
              { value: "Intervencón para adherencia al tratamiento", label: "Intervención para adherencia al tratamiento", trigger: "dynamicResponse" },
              { value: "Manejo del estigma y problemas de salud mental", label: "Manejo del estigma y problemas de salud mental", trigger: "dynamicResponse" },
              { value: "Recursos para pacientes con vih y trastornos psicológicos", label: "Recursos para pacientes con vih y trastornos psicológicos", trigger: "dynamicResponse" },
              { value: "Consejería en prevención y autocuidado", label: "Consejería en prevención y autocuidado", trigger: "dynamicResponse" },

            ],
          },
          {
            id: "9",
            message: "¿Qué necesitas como educador?",
            trigger: "10",
          },
          {
            id: "10",
            options: [
              { value: "Material educativo sobre vih", label: "Material educativo sobre vih", trigger: "dynamicResponse" },
              { value: "Capacitación en prevención", label: "Capacitación en prevención", trigger: "dynamicResponse" },
              { value: "Métodos para combatir el estigma", label: "Métodos para combatir el estigma", trigger: "dynamicResponse" },
              { value: "Recursos para sensibilización", label: "Recursos para sensibilización", trigger: "dynamicResponse" },
              { value: "Estadísticas y datos actualizados", label: "Estadísticas y datos actualizados", trigger: "dynamicResponse" },
            ],
          },
          {
            id: "11",
            message: "¿Qué necesitas como voluntario y cuidador?",
            trigger: "12",
          },
          {
            id: "12",
            options: [
              { value: "Conexión con grupos de apoyo comunitario", label: "Conexión con grupos de apoyo comunitario", trigger: "dynamicResponse" },
              { value: "Info básica sobre vih", label: "Info básica sobre vih", trigger: "dynamicResponse" },
              { value: "Consejos para apoyar emocionalmente", label: "Consejos para apoyar emocionalmente", trigger: "dynamicResponse" },
              { value: "Recursos legales y sociales para pacientes", label: "Recursos legales y sociales para pacientes", trigger: "dynamicResponse" },
              { value: "Métodos de autocuidado para cuidadores", label: "Métodos de autocuidado para cuidadores", trigger: "dynamicResponse" },
            ],
          },
          {
            id: "dynamicResponse",
            message: "Procesando...", 
            end: true,
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

    let response;
    try {
      if (userType === "sociosanitario") {
        response = await sendChatBotSociosanitarioData(logFormated)
        response = {
          "respuesta_chatbot": "Entiendo que te encuentras en una situación nueva y que necesitas información sobre el vih tras tu diagnóstico reciente.  Es totalmente normal sentirte abrumado/a, y quiero ayudarte a encontrar los recursos que necesitas en Álava.  Recuerda que un diagnóstico de vih no define tu vida, y con el tratamiento adecuado, puedes llevar una vida plena y saludable. El hecho de que ya estés en tratamiento TAR es un excelente comienzo.\n\nDado que vives en Álava, vamos a centrarnos en los recursos disponibles en tu provincia.  Desafortunadamente, la información específica sobre servicios de apoyo al vih dirigidos exclusivamente a personas LGTBI+ en Álava es limitada en internet.  No encontramos centros o asociaciones específicas con una presencia online clara y detallada en la zona.  Esto no significa que no existan. Es posible que la atención se integre en servicios de salud pública o se ofrezca de forma más discreta.\n\n**Recomendaciones:**\n\n1. **Tu médico de cabecera:** Él/Ella es tu primer y más importante punto de apoyo.  Es fundamental mantener una comunicación fluida con él/ella sobre cualquier duda, inquietud o efecto secundario que puedas experimentar con el tratamiento.  Tu médico puede ofrecerte información sobre los servicios de apoyo al vih disponibles en Álava a través del sistema sanitario público vasco (Osakidetza).  Pregúntale por programas específicos de apoyo psicológico, grupos de apoyo o recursos sociales.\n\n2. **Osakidetza:**  El Servicio Vasco de Salud (Osakidetza) ofrece servicios de atención sanitaria integral a todas las personas, incluyendo a las que viven con vih. Debes contactar con tu centro de salud o consultorio para informarte sobre los servicios disponibles. Puedes buscar la información y los teléfonos de contacto en su página web: [www.osakidetza.eus](www.osakidetza.eus) (aunque te recomiendo que lo hagas directamente a través de tu médico de cabecera para que te guíe en el proceso).\n\n3. **Apoyo psicológico:**  Un diagnóstico de vih puede generar una amplia gama de emociones.  Es importante tener acceso a apoyo psicológico. Tu médico te puede derivar a un profesional, o puedes buscar psicólogos/as privados/as en Álava.  Existen plataformas online que te permiten encontrar profesionales cerca de tu ubicación.\n\n4. **Recursos de la FELGTBI+:** Aunque no disponemos de un centro físico en Álava, la FELGTBI+ puede ofrecerte apoyo a través de nuestro teléfono (91 360 46 05), correo electrónico (info@felgtbi.org) o nuestra web (https://felgtbi.org/).  Podemos brindarte información general sobre vih, recursos nacionales y orientación si necesitas ayuda para encontrar apoyo en tu zona. Aunque no sea un servicio presencial en Álava, podemos guiarte en la búsqueda de profesionales o recursos que te sean de utilidad.\n\n5. **Plataformas de apoyo online:** Existen plataformas y foros online donde personas que viven con vih comparten sus experiencias y ofrecen apoyo mutuo.  Si lo deseas, podemos facilitarte información sobre estos recursos, que pueden ser de utilidad hasta que encuentres un apoyo presencial en Álava.\n\nRecuerda que no estás solo/a.  Es importante que te cuides y que no dudes en buscar ayuda cuando la necesites.  El diagnóstico de vih es un reto, pero con el tratamiento adecuado y el apoyo correcto, puedes vivir una vida plena y feliz.  No dudes en contactarnos en la FELGTBI+ si necesitas más información o apoyo. Estamos aquí para ayudarte.\n"
        }

      } else {
         response = {
          "respuesta_chatbot": "Entiendo que te encuentras en una situación nueva y que necesitas información sobre el vih tras tu diagnóstico reciente.  Es totalmente normal sentirte abrumado/a, y quiero ayudarte a encontrar los recursos que necesitas en Álava.  Recuerda que un diagnóstico de vih no define tu vida, y con el tratamiento adecuado, puedes llevar una vida plena y saludable. El hecho de que ya estés en tratamiento TAR es un excelente comienzo.\n\nDado que vives en Álava, vamos a centrarnos en los recursos disponibles en tu provincia.  Desafortunadamente, la información específica sobre servicios de apoyo al vih dirigidos exclusivamente a personas LGTBI+ en Álava es limitada en internet.  No encontramos centros o asociaciones específicas con una presencia online clara y detallada en la zona.  Esto no significa que no existan. Es posible que la atención se integre en servicios de salud pública o se ofrezca de forma más discreta.\n\n**Recomendaciones:**\n\n1. **Tu médico de cabecera:** Él/Ella es tu primer y más importante punto de apoyo.  Es fundamental mantener una comunicación fluida con él/ella sobre cualquier duda, inquietud o efecto secundario que puedas experimentar con el tratamiento.  Tu médico puede ofrecerte información sobre los servicios de apoyo al vih disponibles en Álava a través del sistema sanitario público vasco (Osakidetza).  Pregúntale por programas específicos de apoyo psicológico, grupos de apoyo o recursos sociales.\n\n2. **Osakidetza:**  El Servicio Vasco de Salud (Osakidetza) ofrece servicios de atención sanitaria integral a todas las personas, incluyendo a las que viven con vih. Debes contactar con tu centro de salud o consultorio para informarte sobre los servicios disponibles. Puedes buscar la información y los teléfonos de contacto en su página web: [www.osakidetza.eus](www.osakidetza.eus) (aunque te recomiendo que lo hagas directamente a través de tu médico de cabecera para que te guíe en el proceso).\n\n3. **Apoyo psicológico:**  Un diagnóstico de vih puede generar una amplia gama de emociones.  Es importante tener acceso a apoyo psicológico. Tu médico te puede derivar a un profesional, o puedes buscar psicólogos/as privados/as en Álava.  Existen plataformas online que te permiten encontrar profesionales cerca de tu ubicación.\n\n4. **Recursos de la FELGTBI+:** Aunque no disponemos de un centro físico en Álava, la FELGTBI+ puede ofrecerte apoyo a través de nuestro teléfono (91 360 46 05), correo electrónico (info@felgtbi.org) o nuestra web (https://felgtbi.org/).  Podemos brindarte información general sobre vih, recursos nacionales y orientación si necesitas ayuda para encontrar apoyo en tu zona. Aunque no sea un servicio presencial en Álava, podemos guiarte en la búsqueda de profesionales o recursos que te sean de utilidad.\n\n5. **Plataformas de apoyo online:** Existen plataformas y foros online donde personas que viven con vih comparten sus experiencias y ofrecen apoyo mutuo.  Si lo deseas, podemos facilitarte información sobre estos recursos, que pueden ser de utilidad hasta que encuentres un apoyo presencial en Álava.\n\nRecuerda que no estás solo/a.  Es importante que te cuides y que no dudes en buscar ayuda cuando la necesites.  El diagnóstico de vih es un reto, pero con el tratamiento adecuado y el apoyo correcto, puedes vivir una vida plena y feliz.  No dudes en contactarnos en la FELGTBI+ si necesitas más información o apoyo. Estamos aquí para ayudarte.\n"
        }
        // response = await sendChatBotNoSociosanitarioData(log)
      }

      // const serverMessage = response.data.message;
      


    } catch (err) {
      console.error("Error fetching chatbot response:", err);
    }
    




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