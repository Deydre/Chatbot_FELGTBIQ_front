import { useState, useEffect } from 'react';
import './App.css';
import { context } from './context/context';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Importa el ThemeProvider y createTheme


function App() {
  const [profile, setProfile] = useState(null);
  const [userId, setUserId] = useState('');

  // Para login y logout
  const updateProfile = (data) => {
    setProfile(data);
  };

  // Para id de user en el formulario
  const updateUserId = (data) => {
    setUserId(data);
  };

  useEffect(() => {
    //prueba
    const getPrueba = async () => {
      try {
        const resp = await axios.get(`https://chatbot-felgtbiq-back.onrender.com`);
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    };
    getPrueba();
  }, []);

  // Configuración del tema
  const theme = createTheme({
    palette: {
      mode: 'light', // Cambia a 'dark' si prefieres un tema oscuro.
      primary: {
        main: '#007BFF', // Color principal (botón de Protección de Datos).
      },
      background: {
        default: '#F7F7F7', // Color de fondo por defecto.
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <context.Provider value={{ profile, updateProfile, userId, updateUserId }}>
          <Header />
          <Main />
          <Footer>a</Footer>
        </context.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
