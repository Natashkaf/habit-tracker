import './App.css';
import Header from './components/Header/Header';
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import ModalLoginWindow from './components/ModalLoginWindow/ModalLoginwindow';
import React, { useState } from 'react';


function App() {
  const [ModalLoginWindowIsOpen, setModalLoginWindowIsOpen] = useState(false);
  function openModalLoginWindow(){
      setModalLoginWindowIsOpen(true);
  }
  function closeModalLoginWindow(){
      setModalLoginWindowIsOpen(false);
  }
  return (
    <div>
      <Header openModal = {openModalLoginWindow}/>
        <Content openModal = {openModalLoginWindow} />
        < ModalLoginWindow isOpen = {ModalLoginWindowIsOpen} isClose = {closeModalLoginWindow} />
        <Footer />
    </div>
)
}


export default App;
