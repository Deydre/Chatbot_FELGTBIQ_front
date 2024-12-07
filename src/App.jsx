import { useState, useEffect } from 'react';
import './App.css';
import { context } from './context/context'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  // const [profile, setProfile] = useState(null);

  //  // Para login y logout
  //  const updateProfile = (data) => {
  //   setProfile(data)
  // };

  useEffect(() => {

    const getPrueba = async () => {

      try {
        const resp = await axios.get(`https://chatbot-felgtbiq-back.onrender.com`);
        console.log(resp);
      } catch (err) {
        console.log(err)
      }
    }
    getPrueba();
  }, []);


  return (
    <>
      <BrowserRouter >
        <context.Provider value={{}}>
        {/* <context.Provider value={{profile, updateProfile}}> */}
        <Header></Header>
        <Main></Main>
        <Footer>a</Footer>
      </context.Provider >
    </BrowserRouter >
    </>
  )
}

export default App
