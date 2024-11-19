import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"; // Importando o CSS global controlado
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
