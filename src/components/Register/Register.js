import SectionTitle from "../SectionTitle/SectionTitle";
import styles from './Register.module.css'
import { useFormik } from "formik";

const Register = ({setUsuarios, usuarios, id, setId}) =>{

  const colocarMascaraTelefone = (e) =>{
    console.log(e.target.value)
  }

  const validate = values => {
    const errors = {}
    if(!values.firstName){
      errors.firstName = 'Campo Obrigatório'
    } else if(values.firstName.length > 15){
      errors.firstName = 'Tamanho máximo de 15 caracteres'
    } else if(!values.firstName.match(/^[a-zA-Z]+$/)){
      errors.firstName = 'Apenas letras são permitidas'
    }

    if(!values.lastName){
      errors.lastName = 'Campo Obrigatório'
    } else if(values.lastName.length > 15){
      errors.lastName = 'Tamanho máximo de 15 caracteres'
    } else if(!values.lastName.match(/^[a-zA-Z]+$/)){
      errors.lastName = 'Apenas letras são permitidas'
    }

    if(!values.email){
      errors.email = 'Campo Obrigatório'
    } else if(!values.email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/)){
      errors.email = 'Insira um e-mail válido'
    }

    if(!values.address){
      errors.address = 'Campo Obrigatório'
    }

    if(!values.phone){
      errors.phone = 'Campo Obrigatório'
    } 
    // else if(!values.phone.match(/^([0-9]{2})([0-9]{4,5})([0-9]{4})$/)){
    //   errors.phone = 'Insira um número de telefone válido'
    // }

    return errors
  }

  const formik = useFormik ({
    initialValues:
    {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phone: '',
      id: 1
    }, 
    validate,
    onSubmit: values => {
      values.id = id;
      setId(id+1);
      setUsuarios([...usuarios, values]);
      formik.resetForm();
      console.log(usuarios);
    }
  })

  return(
  <div className="container">
    <SectionTitle titulo="Cadastro"/>
    <form onSubmit = {formik.handleSubmit} className={styles.formsMainDiv}>
      <div className={styles.inputDiv}>
        <label htmlFor="firstName">Primeiro Nome*</label>
        <input value={formik.values.firstName} onChange={formik.handleChange} name="firstName" type="text"></input>
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="lastName">Último Nome*</label>
        <input value={formik.values.lastName} onChange={formik.handleChange} type="text" name="lastName"></input>
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="email">Email*</label>
        <input value={formik.values.email} onChange={formik.handleChange} name="email" type="email"></input>
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="address">Endereço*</label>
        <input value={formik.values.address} onChange={formik.handleChange} type="text" name="address"></input>
        {formik.errors.address ? <div>{formik.errors.address}</div> : null}
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="phone">Telefone*</label>
        <input value={formik.values.phone} onChange={formik.handleChange} type="text" name="phone"></input>
        {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
      </div>
      <div className={styles.inputDiv}>
        <button className={styles.formButton} type="submit">Cadastrar</button>
      </div>
    </form>
  </div>
  );
}

export default Register;