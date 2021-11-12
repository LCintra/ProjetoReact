import SectionTitle from "../SectionTitle/SectionTitle";
import style from "../UsersList/UsersList.module.css"
import Users from "../Users/Users"

const UserList = ({usuarios}) =>{
  return(
    <div className="container">
      <SectionTitle titulo="Usuários"/>
      <ul>
        <Users primeiroNome='Joãozinho' ultimoNome='Alvares' email='joazinho@dbc.com' endereco='Rua dos Bobos, n. 0' telefone='99455454'/>

        {usuarios.map(usuario => (
          <Users primeiroNome={usuario.firstName} ultimoNome={usuario.lastName} email={usuario.email} endereco={usuario.address} telefone={usuario.phone}/>
        ))}
      </ul>
      
    </div>
  );
}

export default UserList;