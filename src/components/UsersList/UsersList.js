import SectionTitle from "../SectionTitle/SectionTitle";
import style from "../UsersList/UsersList.module.css"
import Users from "../Users/Users"

const UserList = () =>{
  return(
    <div className="container">
      <SectionTitle titulo="Usuários"/>
      <ul>
        <Users primeiroNome='Joãozinho' ultimoNome='Alvares' email='joazinho@dbc.com' endereco='Rua dos Bobos, n. 0' telefone='99455454'/>

        <Users primeiroNome='Tiaguinho' ultimoNome='Schmidt' email='tiaguinho@dbc.com' endereco='Rua dos Bobos, n. 1' telefone='9945548454'/>
      </ul>
      
    </div>
  );
}

export default UserList;