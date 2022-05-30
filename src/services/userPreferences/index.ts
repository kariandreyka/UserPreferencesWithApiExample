class InMemoryStorage {
  private store: object;

  constructor(initialValue: object = {}) {
    this.store = initialValue;
  }

  getItem(key: string) {
    const storedValue = this.store[key];
    if (!storedValue) return null;
    return JSON.parse(storedValue);
  }

  setItem<T>(key: string, value: T) {
    this.store[key] = JSON.stringify(value);
  }

  removeItem(key: string) {
    if (this.store[key]) {
      delete this.store[key];
    }
  }

  setupStorage(value: object) {
    this.store = value;
  }

  extract() {
    return this.store;
  }

  clear() {
    this.store = {};
  }
}

export default new InMemoryStorage();
