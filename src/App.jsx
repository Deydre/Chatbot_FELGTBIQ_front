import { useState, useEffect } from 'react';
import './App.css';
import { context } from './context/context'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)


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
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </context.Provider >
    </BrowserRouter >
    </>
  )
}

export default App
