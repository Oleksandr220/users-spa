const changeDateFormat = (date) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return new Date(date).toLocaleString('Ru-ru', options);
};

export default changeDateFormat;
