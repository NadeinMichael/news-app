import styles from './styles.module.css';

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder='Javascript'
        className={styles.input}
      />
    </div>
  );
};

export default Search;
