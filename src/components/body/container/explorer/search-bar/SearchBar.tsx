import React, { useCallback, useEffect, useState } from 'react';
import * as styles from './searchbar.module.css';
import { ChevronDown } from 'lucide-react';
import { ALL_PAGES } from '../../../../../constants/all';
import { FileName, FileSchemaName } from '../../../../../constants/files.types';
import PORTFOLIO_FILES, {
  CONTACT_FILES,
} from '../../../../../constants/portfolio-file';
import FileRenderer from '../FileRenderer';

const SearchBar = () => {
  const [showReplaceBar, setShowReplaceBar] = useState(true);

  const [searchText, setSearchText] = useState('');
  const [debounceValue, setDebounceValue] = useState('');
  const [results, setResults] = useState<
    { id: number; label: string; value: FileSchemaName }[]
  >([]);
  console.log('🚀 ~ SearchBar ~ results:', results);

  const debounceSearch = useCallback(() => {
    const timer = setTimeout(() => {
      setDebounceValue(searchText);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText]);

  useEffect(debounceSearch, [searchText]);

  useEffect(() => {
    if (debounceValue) {
      const res: string[] = [];
      ALL_PAGES.forEach((page) => {
        if (
          JSON.stringify(page)
            .toLowerCase()
            .includes(debounceValue.toLowerCase())
        ) {
          res.push(FileName[page.pageName]);
        }
      });
      const searchedFiles = [...PORTFOLIO_FILES, ...CONTACT_FILES].filter(
        (file) => res.includes(file.label),
      );
      setResults(searchedFiles);
    } else {
      setResults([]);
    }
  }, [debounceValue]);

  return (
    <div>
      <div className={styles.search_heading}>EXPLORER</div>
      <div className={styles.container}>
        <div>
          <ChevronDown
            className={`${styles.icon} ${!showReplaceBar ? styles.rotate : ''}`}
            onClick={() => setShowReplaceBar(!showReplaceBar)}
          />
        </div>
        <div className={styles.input_container}>
          <input
            type="text"
            id="search"
            name="search"
            className={styles.input}
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            required
          />
          {showReplaceBar ? (
            <input
              type="text"
              id="replace"
              name="replace"
              className={styles.input}
              placeholder="Replace"
              disabled
            />
          ) : null}
        </div>
      </div>
      <div>
        {results?.length ? (
          <FileRenderer files={results} showMarker={false} />
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
