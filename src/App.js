import logo from "./logo.svg";
import "./App.css";
import ListaUsuarios from "./LIstaUsuarios";
import AgregarUsuarios from "./AgregarUsuarios";
import EditarUsuarios from "./EditarUsuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>CRUD Stack MERN</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />}></Route>
          <Route path="agregarusuario" element={<AgregarUsuarios />}></Route>
          <Route path="editarusuario" element={<EditarUsuarios />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
