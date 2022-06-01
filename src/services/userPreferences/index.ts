export class PreferencesStorage {
  static getItem<T>(key: string): T | null {
    const storedValue = sessionStorage.getItem(key);
    if (!storedValue) return null;
    return JSON.parse(storedValue);
  }

  static setItem<T>(key: string, value: T) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string) {
    sessionStorage.removeItem(key);
  }

  static setupStorage(value: Record<string, string>) {
    console.log('setup', value);
    for (const key in value) {
      console.log(value[key]);
      sessionStorage.setItem(key, value[key]);
    }
  }

  static extract() {
    return sessionStorage;
  }

  static clear() {
    sessionStorage.clear();
  }
}
