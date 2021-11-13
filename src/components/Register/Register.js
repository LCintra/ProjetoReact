import SectionTitle from "../SectionTitle/SectionTitle";
import styles from './Register.module.css'
import { useFormik } from "formik";
import InputMask from "react-input-mask";
import { useEffect } from "react";


const Register = ({setUsuarios, usuarios, id, setId,usuarioEditar,setModoEditar, modoEditar}) =>{
  let valoresIniciais
  if(modoEditar){
    valoresIniciais = {
      firstName: usuarioEditar.primeiroNome,
      lastName: usuarioEditar.ultimoNome,
      email: usuarioEditar.email,
      address: usuarioEditar.endereco,
      phone: usuarioEditar.telefone,
      id: usuarioEditar.id
    }
  } else{
    valoresIniciais = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phone: '',
      id: 1
    }
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
    } else if(values.phone.split('').some(caracter => caracter == '_')){
      errors.phone = 'Telefone Inválido'
    }

    return errors
  }

  const formik = useFormik ({
    initialValues: valoresIniciais,
    validate,
    enableReinitialize: true,
    onSubmit: values => {
      if(!modoEditar){
        values.id = id;
        setUsuarios([...usuarios, values]);
      } else {
        let user = usuarios.find(usuario => usuario.id == usuarioEditar.id)
        console.log(user)
        let posicao = usuarios.indexOf(user)
        usuarios = usuarios.splice(posicao,1,{firstName:values.firstName,lastName:values.lastName,email:values.email,address:values.address,phone:values.phone,id:id})
        setModoEditar(false)
      }
      setId(id+1);
      console.log(usuarios)
      formik.resetForm();
    }
  })

  return(
  <div className="container">
    <SectionTitle titulo="Cadastro"/>
    <form onSubmit = {formik.handleSubmit} className={styles.formsMainDiv}>
      <div className={styles.inputDiv}>
        <label htmlFor="firstName">Primeiro Nome*</label>
        <input value={formik.values.firstName} onChange={formik.handleChange} name="firstName" type="text"></input>
        {formik.errors.firstName ? <div className={styles.errorMessage}>{formik.errors.firstName}</div> : null}
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="lastName">Último Nome*</label>
        <input value={formik.values.lastName} onChange={formik.handleChange} type="text" name="lastName"></input>
        {formik.errors.lastName ? <div className={styles.errorMessage}>{formik.errors.lastName}</div> : null}
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="email">Email*</label>
        <input value={formik.values.email} onChange={formik.handleChange} name="email" type="email"></input>
        {formik.errors.email ? <div className={styles.errorMessage}>{formik.errors.email}</div> : null}
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="address">Endereço*</label>
        <input value={formik.values.address} onChange={formik.handleChange} type="text" name="address"></input>
        {formik.errors.address ? <div className={styles.errorMessage}>{formik.errors.address}</div> : null}
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="phone">Telefone*</label>
        <InputMask mask="(99) 99999-9999" value={formik.values.phone} onChange={formik.handleChange} type="text" name="phone"></InputMask>
        {formik.errors.phone ? <div className={styles.errorMessage}>{formik.errors.phone}</div> : null}
      </div>
      <div className={styles.inputDiv}>
        {modoEditar ? <button className={styles.formButton}>Editar</button> : <button className={styles.formButton} type="submit">Cadastrar</button>}
      </div>
    </form>
  </div>
  );
}

export default Register;