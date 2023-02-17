export const storage = {
  get: (key) => {
    const storedItem = localStorage.getItem(key);

    if (!storedItem) return null;

    const item = JSON.parse(storedItem);
    return item;
  },
};

const get = (key) => {
  return storage.get(key);
};

export const persistance = {
  get,
};
