export class PreferencesStorage {
  private storage: Record<string, string>;

  constructor(value: Record<string, string> = {}) { 
    this.storage = value;
  }
  getItem<T>(key: string): T | null {
    const storedValue = this.storage[key];
    if (!storedValue) return null;
    return JSON.parse(storedValue);
  }

  setItem<T>(key: string, value: T) {
    this.storage[key] = JSON.stringify(value);
  }

  removeItem(key: string) {
    if (this.storage[key]) {
      delete this.storage[key];
    }
  }

  setupStorage(value: Record<string, string>) {
    this.storage = value;
  }

  extract() {
    return this.storage;
  }

  clear() {
    this.storage = {};
  }
}

export const storage = new PreferencesStorage();
