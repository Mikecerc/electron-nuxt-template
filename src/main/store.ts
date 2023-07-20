import Store from "electron-store";
import { iConfigPrivate } from "./types";
const defaults = {
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
};
export let config = new Store<iConfigPrivate>({ defaults: defaults });
