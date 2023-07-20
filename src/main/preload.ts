import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld("electronAPI", {
  getIP(): Promise<string[]> {
    return ipcRenderer.invoke("getIP");
  },
  killX(): Promise<void> {
    return ipcRenderer.invoke("killX");
  },
  clearDB(): Promise<void> {
    return ipcRenderer.invoke("clearDB");
  },
});
