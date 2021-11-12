import SectionTitle from "../SectionTitle/SectionTitle";
import styles from './Register.module.css'
const Register = () =>{
  return(
  <div className="container">
    <SectionTitle titulo="Cadastro"/>
    <form className={styles.formsMainDiv}>
      <div className={styles.inputDiv}>
        <label for="nome-completo">Primeiro Nome*</label>
        <input name="nome-completo" type="text"></input>
      </div>
      <div className={styles.inputDiv}>
        <label for="data-nascimento">Último Nome*</label>
        <input type="text"></input>
      </div>
      <div className={styles.inputDiv}>
        <label for="email">Email*</label>
        <input name="email" type="email"></input>
      </div>
      <div className={styles.inputDiv}>
        <label for="senha">Endereço*</label>
        <input type="password" name="senha"></input>
      </div>
      <div className={styles.inputDiv}>
        <label for="senha">Telefone*</label>
        <input type="password" name="senha"></input>
      </div>
      <div className={styles.inputDiv}>
        <button className={styles.formButton} type="submit">Cadastrar</button>
      </div>
    </form>
  </div>
  );
}

export default Register;