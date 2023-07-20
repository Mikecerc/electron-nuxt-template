export interface iIPRequest {
  device: string;
  address: string;
}
export interface iConfig {
  api: iAPIConfig;
  dev: iDevConfig;
}
export interface iConfigPrivate extends iConfig {
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
