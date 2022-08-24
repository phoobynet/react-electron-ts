const { ipcRenderer } = window.require('electron')

/**
 * Invoke a method on the main process.
 * @param {string} channel
 * @param {...unknown[]} args
 */
export const invoke = async <T>(
  channel: string,
  ...args: unknown[]
): Promise<T> => {
  return (await ipcRenderer.invoke(channel, ...args)) as T
}
