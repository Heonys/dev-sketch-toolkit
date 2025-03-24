import { contextBridge } from "electron";

const api = {
  test: () => "test value",
};

contextBridge.exposeInMainWorld("api", api);
