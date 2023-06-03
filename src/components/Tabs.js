import { useState } from "react"
import styles from "./Tabs.module.css"
import cx from "clsx"

const tabList = ["Code", "Issues", "Pull requests"]

const Tabs = () => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0)

  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, idx) => (
        <Tab
          key={`${idx}`} // react 규칙
          selected={selectedTabIdx === idx}
          title={tab}
          onClick={() => setSelectedTabIdx(idx)} // 클릭했을 때, 해당 인덱스로 변경
        />
      ))}
    </ul>
  )
}

const Tab = ({ title, selected, onClick, number }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  )
}

export default Tabs
