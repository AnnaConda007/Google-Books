import styles from './TitleText.module.css'

const TitleText: React.FC = () => {
  const text = ' Search for books'
  return (
    <div className={styles.container}>
      <h5 className={styles.text}>{text}</h5>
    </div>
  )
}

export default TitleText
