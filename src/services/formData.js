import axios from 'axios';

const urlSociosanitario = 'https://felgtbi-plus.onrender.com/submit-data-2/'
const urlNoSociosanitario = 'https://felgtbi-plus.onrender.com/submit-data/'


// Envío de datos de Sociosanitario
export const sendFormSociosanitarioData = async (data) => {
  setLoading(true);
  try {
    const response = await axios.post(urlSociosanitario, data, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    response ? console.log(response) : console.log("")
    return response; 
  } catch (error) {
    throw new Error("Error: " + error.message);
  } finally {
    setLoading(false);
  }
};

// Envío de datos de No Sociosanitario
export const sendFormNoSociosanitarioData = async (data) => {
  setLoading(true);
  try {
    const response = await axios.post(urlNoSociosanitario, data, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    response ? console.log(response) : console.log("")
    return response; 
  } catch (error) {
    throw new Error("Error: " + error.message);
  } finally {
    setLoading(false);
  }
};