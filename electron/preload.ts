import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  send: (channel: string, data: unknown) => ipcRenderer.send(channel, data),
  invoke: (channel: string, data?: unknown) => ipcRenderer.invoke(channel, data),
  receive: (channel: string, func: (...args: unknown[]) => void) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args))
});
