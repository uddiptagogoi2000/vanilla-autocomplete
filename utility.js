export function debounce(callback, delay) {
  let timeId;
  return function (...args) {
    clearTimeout(timeId);

    timeId = setTimeout(() => callback(...args), delay);
  };
}
