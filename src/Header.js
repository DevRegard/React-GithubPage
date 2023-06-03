import styles from "./Header.module.css"
import Button from "./components/Button"
import Space from "./components/Space"
// import Tabs from "./components/Tabs"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Watch
        </Button>
        <Space />
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Fork <div className={styles.circle}>5</div>
        </Button>
        <Space />
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Star
        </Button>
      </div>
      {/* <Tabs /> */}
    </div>
  )
}

export default Header
