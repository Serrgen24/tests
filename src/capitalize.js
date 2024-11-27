const capitalize = (text) => {
  if (text.length === 0) {
    return '';
  }
  const [firstChar, ...restSubstring] = text;
  return `${firstChar.toUpperCase()}${restSubstring.join('')}`;
};
export default capitalize;