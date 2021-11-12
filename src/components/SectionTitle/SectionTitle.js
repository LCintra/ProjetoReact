import styles from './SectionTitle.module.css'
const SectionTitle = ({titulo}) =>{
  return(
    <h1 className={styles.formTitle}>{titulo}</h1>
  );
}

export default SectionTitle;