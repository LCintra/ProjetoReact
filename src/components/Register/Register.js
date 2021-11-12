import SectionTitle from "../SectionTitle/SectionTitle";
import styles from './Register.module.css'
import { useFormik } from "formik";

const Register = () =>{
  const formik = useFormik ({
    initialValues:
    {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phone: ''
    }, 
    onSubmit: values => {
      console.log(values);
    }
  })

  return(
  <div className="container">
    <SectionTitle titulo="Cadastro"/>
    <form onSubmit = {formik.handleSubmit} className={styles.formsMainDiv}>
      <div className={styles.inputDiv}>
        <label htmlFor="firstName">Primeiro Nome*</label>
        <input value={formik.values.firstName} onChange={formik.handleChange} name="firstName" type="text"></input>
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="lastName">Último Nome*</label>
        <input value={formik.values.lastName} onChange={formik.handleChange} type="text" name="lastName"></input>
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="email">Email*</label>
        <input value={formik.values.email} onChange={formik.handleChange} name="email" type="email"></input>
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="address">Endereço*</label>
        <input value={formik.values.address} onChange={formik.handleChange} type="text" name="address"></input>
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="phone">Telefone*</label>
        <input value={formik.values.phone} onChange={formik.handleChange} type="number" name="phone"></input>
      </div>
      <div className={styles.inputDiv}>
        <button className={styles.formButton} type="submit">Cadastrar</button>
      </div>
    </form>
  </div>
  );
}

export default Register;