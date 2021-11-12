import style from "../Users/Users.module.css"

function Users ({primeiroNome, ultimoNome, email, endereco, telefone}) {
  return (
    <>
      <li>
          <div className={style.informations}>
            <p><span>Nome Completo:</span> {primeiroNome} {ultimoNome}</p>
            <p><span>Email:</span> {email}</p>
          </div>
          <div className={style.informations}>
            <p><span>Endereço:</span> {endereco}</p>
            <p><span>Telefone:</span>{telefone}</p>
          </div>
        </li>
    </>
  );
}

export default Users;