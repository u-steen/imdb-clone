import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AuthenticationPage from "./pages/AuthenticationPage";
import Container from "./pages/Container";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthenticationPage />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
