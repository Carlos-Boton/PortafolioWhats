import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Interfaz from "./components/tablet/layout/interfaz";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/proyectos" replace />} />
            <Route path="/proyectos" element={<Interfaz />} />
            <Route path="/proyectos/:id" element={<Interfaz />} />
            <Route path="/sobre-mi" element={<Interfaz />} />
            <Route path="/contacto" element={<Interfaz />} />
            <Route path="/ajustes" element={<Interfaz />} />
            <Route path="/perfil" element={<Interfaz />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
