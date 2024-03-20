import { GetNotes, ReadNote } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args),
    writeNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('writeNote', ...args),
    createNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('createNote', ...args)
  })
} catch (error) {
  console.log(error)
}
