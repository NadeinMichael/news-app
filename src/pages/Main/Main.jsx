import LatestNews from '../../components/LatestNews/LatestNews';

import styles from './styles.module.css';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default Main;
