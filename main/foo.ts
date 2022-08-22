import { ipcMain } from 'electron'

ipcMain.handle('foo', () => {
  return {
    message: 'bar',
  }
})
