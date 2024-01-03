import { PAGE_SIZE } from '../../constants';
import { getNews } from '../../api/apiNews';

import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFilters } from '../../helpers/hooks/useFilters';
import { useFetch } from '../../helpers/hooks/useFetch';

import LatestNews from '../../components/LatestNews/LatestNews';

import styles from './styles.module.css';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data?.news} />

      <NewsByFilters
        isLoading={isLoading}
        news={data?.news}
        filters={filters}
        changeFilter={changeFilter}
      />
    </main>
  );
};

export default Main;
