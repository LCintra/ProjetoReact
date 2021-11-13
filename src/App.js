import './App.css'
import Register from './components/Register/Register';
import UserList from './components/UsersList/UsersList';
import { useState } from 'react';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState(1);
  const [usuarioEditar,setUsuarioEditar] = useState()
  const [modoEditar,setModoEditar] = useState(false)
  return (
    <>
      <Register setModoEditar={setModoEditar} modoEditar={modoEditar} usuarioEditar={usuarioEditar} setUsuarios={setUsuarios} usuarios={usuarios} id={id} setId={setId}/>
      <UserList setModoEditar={setModoEditar} setUsuarioEditar={setUsuarioEditar} usuarios={usuarios}/>
    </>
  );
}

export default App;
