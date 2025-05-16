export interface Storage {
  setItem: (key: string, value: string) => Promise<boolean>;
  getItem: (key: string) => Promise<string | undefined>;
  removeItem: (key: string) => Promise<void>;
}
