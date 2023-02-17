const mockLocalStorage = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },
  };
})();

export default mockLocalStorage;
