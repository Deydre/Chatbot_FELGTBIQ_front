import axios from 'axios';

const urlChatBotSociosanitario = 'https://felgtbi-plus.onrender.com/personalizar_prompt_usuario_ss'
const urlChatBotNoSociosanitario = 'https://felgtbi-plus.onrender.com/personalizar_prompt_usuario_no_ss'


// Envío de datos de Sociosanitario
export const sendChatBotSociosanitarioData = async (data) => {
  try {
    const response = await axios.post(urlChatBotSociosanitario, data, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    return response; 
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
};

// Envío de datos de No Sociosanitario
export const sendChatBotNoSociosanitarioData = async (data) => {
  try {
    const response = await axios.post(urlChatBotNoSociosanitario, data, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    response ? console.log(response) : console.log("")
    return response; 
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
};