import React, { useEffect, useState } from 'react';
import * as styles from './searchbar.module.css';
import { ALL_PAGES } from '../../../../../constants/all';
import { FileName, FileSchemaName } from '../../../../../constants/files.types';
import PORTFOLIO_FILES, {
  CONTACT_FILES,
} from '../../../../../constants/portfolio-file';
import FileRenderer from '../FileRenderer';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<
    { id: number; label: string; value: FileSchemaName }[]
  >([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const query = searchText.trim().toLowerCase();
      if (!query) {
        setResults([]);
        setSearched(false);
        return;
      }
      setSearched(true);

      const labels = ALL_PAGES.flatMap((page) => {
        if (JSON.stringify(page).toLowerCase().includes(query)) {
          return [FileName[page.pageName]];
        }
        return [];
      });
      setResults(
        [...PORTFOLIO_FILES, ...CONTACT_FILES].filter((file) =>
          labels.includes(file.label),
        ),
      );
    }, 200);

    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <div>
      <div className={styles.search_heading}>SEARCH</div>
      <div className={styles.container}>
        <div className={styles.input_container}>
          <input
            type="text"
            id="search"
            name="search"
            className={styles.input}
            placeholder="Search"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
      </div>
      <div>
        {results.length ? (
          <FileRenderer files={results} showMarker={false} />
        ) : null}
        {searched && results.length === 0 ? (
          <p className={styles.empty}>No results</p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
