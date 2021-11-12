import SectionTitle from "../SectionTitle/SectionTitle";
import styles from './Register.module.css'
const Register = () =>{
  return(
  <div className={styles.container}>
    <SectionTitle titulo="Cadastro"/>
    <form className={styles.formsMainDiv}>
      <div className={styles.inputDiv}>
        <label for="tipo-usuario">Tipo de Usuário</label>
        <select name="tipo-usuario">
          <option value=""></option>
          <option value="recrutador">Recrutador</option>
          <option value="trabalhador">Trabalhador</option>
        </select>
      </div>
      <div className={styles.inputDiv}>
        <label for="nome-completo">Nome Completo*</label>
        <input name="nome-completo" type="text"></input>
      </div>
      <div className={styles.inputDiv}>
        <label for="data-nascimento">Data de Nascimento*</label>
        <input type="text"></input>
      </div>
      <div className={styles.inputDiv}>
        <label for="email">Email*</label>
        <input name="email" type="email"></input>
      </div>
      <div className={styles.inputDiv}>
        <label for="senha">Senha*</label>
        <input type="password" name="senha"></input>
      </div>
      <div className={styles.checkboxDiv}>
        <input type="checkbox"></input>
        <label>Primeiro Emprego?</label>
      </div>
      <div className={styles.inputDiv}>
        <button className="formButton" type="submit">Cadastrar</button>
      </div>
    </form>
  </div>
  );
}

export default Register;