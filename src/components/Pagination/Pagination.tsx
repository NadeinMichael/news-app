import { useTheme } from '../../context/ThemeContext';
import { IPaginationProps } from '../../interfaces';
import styles from './styles.module.css';

const Pagination = ({
  totalPages,
  currentPage,
  handleNextPage,
  handlePageClick,
  handlePreviousPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        className={styles.arrow}
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              className={styles.pageNumber}
              onClick={() => handlePageClick(index + 1)}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
