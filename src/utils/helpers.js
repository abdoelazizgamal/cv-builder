export const getFormattedDate = (value) => {
  if (!value) return "";
  const date = new Date(value);

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
