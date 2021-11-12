import './App.css'
import Register from './components/Register/Register';
import UserList from './components/UsersList/UsersList';
import { useState } from 'react';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  return (
    <>
      <Register setUsuarios={setUsuarios} usuarios={usuarios}/>
      <UserList usuarios={usuarios}/>
    </>
  );
}

export default App;
