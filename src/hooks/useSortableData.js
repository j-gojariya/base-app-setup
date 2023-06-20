import { useMemo, useState } from 'react';

import { getSearchResult } from 'utils/helpers/commonMethods';

const useSortableTable = (initialData) => {
  const [data] = useState(initialData);
  const [sortKey, setSortKey] = useState('');
  const [sortType, setSortType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const sortTable = (key, type) => {
    setSortKey(key);
    setSortType(type);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const sortedData = useMemo(() => {
    let filteredData = data;

    if (searchTerm) {
      filteredData = getSearchResult(searchTerm, filteredData);
    }

    let sortedData = [...filteredData];

    sortedData = sortedData.sort((a, b) => {
      const valueA = a[sortKey];
      const valueB = b[sortKey];

      if (sortType === 'ASC') {
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
      } else if (sortType === 'DESC') {
        if (valueA > valueB) return -1;
        if (valueA < valueB) return 1;
      }

      return 0;
    });

    return sortedData;
  }, [data, sortKey, sortType, searchTerm]);

  return {
    sortedData,
    sortKey,
    sortType,
    sortTable,
    searchTerm,
    handleSearch,
  };
};

export default useSortableTable;
