export interface IElectronAPI {
  sendMessage: (string) => Promise<void>;
  config: {
    get: () => Promise<iConfig>;
    set: (key: string, val: string) => Promise<void>;
  };
  getIP: () => Promise<iIPRequest[]>;
  killX: () => Promise<void>;
  clearDB: () => Promise<void>;
}
export declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
export interface iIPRequest {
  device: string;
  address: string;
}
export interface iConfig {
  api: iAPIConfig;
  dev: iDevConfig;
}
export interface iAPIConfig {
  database: {
    address: string;
    port: number;
    databaseName: string;
  };
}
export interface iDevConfig {
  devServerPort: number;
}
