const initials = (name = '') =>
  name
    .split(' ')
    .map((word) => `${word.charAt(0).toLowerCase()}.`)
    .join('');

export default initials;
