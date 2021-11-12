import './App.css'
import Register from './components/Register/Register';
import UserList from './components/UsersList/UsersList';
import { useState } from 'react';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState(0);

  return (
    <>
      <Register setUsuarios={setUsuarios} usuarios={usuarios} id={id} setId={setId}/>
      <UserList usuarios={usuarios}/>
    </>
  );
}

export default App;
