import styles from '../../../styles/Loading.module.scss'
import ReactLoading from 'react-loading'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <ReactLoading
        type="bars"
        color={'rgba(227, 144, 92, 1)'}
        className={styles.loadingIcon}
      />
    </div>
  )
}

export default Loading