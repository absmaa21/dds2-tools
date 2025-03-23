export default class Storage {

  static save(key: string, value: string | object) {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
  }

  static load(key: string): string | null {
    return localStorage.getItem(key)
  }

  static remove(key: string) {
    localStorage.removeItem(key)
  }

  static clear() {
    localStorage.clear()
  }

}


export enum StorageKey {
  VISIBLE_TYPES = "visibleTypes",
}