interface IOptions{
    [key:string]: string
}

const changeDateFormat = (date: Date) => {
  const options: IOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return new Date(date).toLocaleString('Ru-ru', options);
};

export default changeDateFormat;
