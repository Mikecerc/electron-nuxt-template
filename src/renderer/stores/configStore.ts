import { defineStore } from "pinia";
import { iConfig } from "../render";
//create a store that houses the config data recieved from configIPC.ts
export const useConfigStore = defineStore({
  id: "config",
  state: () => ({
    api: {
      database: {
        address: "mongodb://localhost",
        port: 27017,
        databaseName: "logs",
      },
    },
    dev: {
      devServerPort: 3000,
    },
  }),
  actions: {
    async updateLocalConfig() {
      const config: iConfig = await window.electronAPI.config.get();
      this.api = config.api;
      this.dev = config.dev;
    },
    async updateConfig() {
      await window.electronAPI.config.set(
        "dev.devServerPort",
        this.dev.devServerPort.toString(),
      );
      await window.electronAPI.config.set(
        "api.database.address",
        this.api.database.address,
      );
      await window.electronAPI.config.set(
        "api.database.port",
        this.api.database.port.toString(),
      );
      await window.electronAPI.config.set(
        "api.database.databaseName",
        this.api.database.databaseName,
      );
    },
  },
  getters: {
    getAllConfig(): iConfig {
      return {
        api: this.api,
        dev: this.dev,
      };
    },
  },
});
