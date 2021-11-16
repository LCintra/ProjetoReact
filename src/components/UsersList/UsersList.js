import SectionTitle from "../SectionTitle/SectionTitle";
import style from "../UsersList/UsersList.module.css"
import Users from "../Users/Users"

const UserList = ({usuarios,setUsuarioEditar,setModoEditar, setUsuarios}) =>{
  return(
    <div className="container">
      <SectionTitle titulo="Usuários"/>
      <ul>
        {usuarios.map(usuario => (
          <Users 
          setModoEditar={setModoEditar} 
          setUsuarioEditar={setUsuarioEditar} 
          primeiroNome={usuario.firstName} 
          ultimoNome={usuario.lastName} 
          email={usuario.email} 
          endereco={usuario.address} 
          telefone={usuario.phone} 
          id={usuario.id} 
          usuarios={usuarios} 
          key={usuario.id} 
          setUsuarios={setUsuarios}/>
        ))}
      </ul>
      
    </div>
  );
}

export default UserList;