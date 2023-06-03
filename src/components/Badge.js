import styles from "./Badge.module.css"

const Badge = ({ name, color }) => {
  return (
    <div className={styles.badge} style={{ background: `#${color}` }}>
      {name}
    </div>
  )
}
export default Badge
