import moment from 'moment';

export const formatDate = (dateString) => {
  const formattedDate = moment(dateString).format('DD-MM-YYYY');
  return formattedDate;
};

export const getSortOrder =
  (prop, asc = true) =>
  (a, b) => {
    if (asc ? a[prop] < b[prop] : a[prop] > b[prop]) {
      return -1;
    }
    if (asc ? a[prop] > b[prop] : a[prop] < b[prop]) {
      return 1;
    }
    return 0;
  };

export const getSearchResult = (searchText, data) =>
  data.filter((item) =>
    Object.values(item)
      .join('')
      .toLowerCase()
      .includes(searchText.toLowerCase()),
  );
