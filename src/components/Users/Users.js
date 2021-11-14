import style from "../Users/Users.module.css"
import {FaTrashAlt, FaRegEdit} from 'react-icons/fa'

function Users ({primeiroNome, ultimoNome, email, endereco, telefone, id, setUsuarioEditar,setModoEditar, usuarios, setUsuarios}) {
  return (
    <>
      <li id={id}>
          <div className={style.informations}>
            <p><span>Nome Completo:</span> {primeiroNome} {ultimoNome}</p>
            <p><span>Email:</span> {email}</p>          
          </div>
          <div className={style.informations}>
            <p><span>Endereço:</span> {endereco}</p>
            <p><span>Telefone:</span>{telefone}</p>
          </div>
          <div className={style.informations}>
            <FaRegEdit onClick={(e)=>{
              setModoEditar(true)
              setUsuarioEditar({primeiroNome:primeiroNome,ultimoNome:ultimoNome,email:email,endereco:endereco,telefone:telefone,id:id})
            }}/>
            <FaTrashAlt onClick={(e)=>{              
              setUsuarios(usuarios.filter(usuario => usuario.id != id));
            }}/>
          </div>
        </li>
    </>
  );
}

export default Users;