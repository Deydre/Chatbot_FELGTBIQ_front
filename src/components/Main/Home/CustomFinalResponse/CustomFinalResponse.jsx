import React, { useState, useEffect } from 'react';
import { sendChatBotSociosanitarioData, sendChatBotNoSociosanitarioData } from "../../../../services/chatbotData";

const CustomFinalResponse = (props) => {
  const { steps, userType, userId } = props;
  const [responseMessage, setResponseMessage] = useState("Un momento, por favor...");

  // Mensaje de fallback para usuarios NO sociosanitarios
  const fallbackMessageNoSociosanitario = `
Lo siento, en este momento no dispongo de una respuesta específica para tu situación.
Te recomiendo buscar apoyo especializado. Si tienes acceso a un centro de salud cercano,
acude a él para recibir orientación personalizada. También puedes consultar recursos
oficiales en el servicio público de salud o contactar con organizaciones especializadas.

Algunos enlaces útiles (copia y pega en tu navegador):
- https://felgtbi.org/salud
- https://www.mscbs.gob.es/

Recuerda que no estás solx. Hablar con profesionales y apoyarte en recursos comunitarios
puede marcar la diferencia.
`;

  // Mensaje de fallback para usuarios sociosanitarios
  const fallbackMessageSociosanitario = `
No dispongo de una respuesta específica en este momento.
Te sugiero consultar protocolos y guías clínicas oficiales. Puedes revisar los recursos
de salud pública, así como contactar con colegios profesionales
o la FELGTBI+ para obtener información actualizada sobre apoyo a personas con vih.

Algunos enlaces útiles (copia y pega en tu navegador):
- https://felgtbi.org/salud
- https://www.mscbs.gob.es/

Asegurarte de disponer de información fiable contribuirá a brindar el mejor apoyo a
quienes lo necesitan.
`;

  // Esta función formatea el log de la conversación
  function formatToDataObject(array) {
    return { data: array };
  }

  useEffect(() => {
    const getResponse = async () => {
      // Extraemos el mensaje de cada step
      const log = Object.values(steps)
        .map(step => step.message)
        .filter(Boolean);

      // Insertamos el userId al inicio
      log.unshift(userId);
      const logFormated = formatToDataObject(log);

      try {
        let response;
        if (userType === "sociosanitario") {
          response = await sendChatBotSociosanitarioData(logFormated);
        } else {
          response = await sendChatBotNoSociosanitarioData(logFormated);
        }

        // Ajustamos la extracción de la respuesta según la estructura real del endpoint
        const finalMsg = response?.data?.respuesta_chatbot
          || (userType === "sociosanitario" ? fallbackMessageSociosanitario : fallbackMessageNoSociosanitario);

        setResponseMessage(finalMsg);

      } catch (error) {
        console.error("Error fetching chatbot response:", error);
        // Si falla la petición, también utilizamos un mensaje de fallback apropiado
        setResponseMessage(userType === "sociosanitario" ? fallbackMessageSociosanitario : fallbackMessageNoSociosanitario);
      }
    };

    getResponse();
  }, [userType, userId, steps]);

  return (
    <div>{responseMessage}</div>
  );
};

export default CustomFinalResponse;
