import SectionTitle from "../SectionTitle/SectionTitle";
import style from "../UsersList/UsersList.module.css"
import Users from "../Users/Users"

const UserList = ({usuarios}) =>{
  return(
    <div className="container">
      <SectionTitle titulo="Usuários"/>
      <ul>
        {usuarios.map(usuario => (
          <Users primeiroNome={usuario.firstName} ultimoNome={usuario.lastName} email={usuario.email} endereco={usuario.address} telefone={usuario.phone} key={usuario.id}/>
        ))}
      </ul>
      
    </div>
  );
}

export default UserList;