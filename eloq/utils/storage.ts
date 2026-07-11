export const storage = {
      save(key:string, value:unknown) {
        localStorage.setItem(key, JSON.stringify(value))
      },
      get<T>(key:string): T | null {
        const value = localStorage.getItem(key);
          return value ? JSON.parse(value) : null;
      },
      remove(key: string) {
        localStorage.removeItem(key);
      }
    }