import styles from "./Pagination.module.css"
import cx from "clsx"

const Pagination = ({ currentPage, maxPage, onClickPageButton }) => {
  return (
    <div>
      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === 1}
      >
        {"< Prev"}
      </button>

      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton
          number={i + 1}
          onClick={onClickPageButton}
          selected={i + 1 === currentPage}
        />
      ))}

      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === maxPage}
      >
        {"next >"}
      </button>
    </div>
  )
}

const PageButton = ({ number, selected, onClick }) => {
  return (
    <button
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  )
}

export default Pagination
