const months = [
  { index: 0, name: "Jan" },
  { index: 1, name: "Feb" },
  { index: 2, name: "Mar" },
  { index: 3, name: "Apr" },
  { index: 4, name: "May" },
  { index: 5, name: "Jun" },
  { index: 6, name: "Jul" },
  { index: 7, name: "Aug" },
  { index: 8, name: "Sep" },
  { index: 9, name: "Oct" },
  { index: 10, name: "Nov" },
  { index: 11, name: "Dec" },
];

export const getTimeOfPublish = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const displayMonths = months.find(({ index, name }) => index === month).name;
  const displayHours = hours > 9 ? hours : `0${hours}`;
  const displayMinutes = minutes > 9 ? minutes : `0${minutes}`;
  return `${displayMonths} ${day}, ${year} at ${displayHours}:${displayMinutes}`;
};
