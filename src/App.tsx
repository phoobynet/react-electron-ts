import { useEffect, useState } from 'react'

const { ipcRenderer } = window.require('electron')

export default function App() {
  const [data, setData] = useState<{ message: string }>()

  useEffect(() => {
    ;(async () => {
      setData(await ipcRenderer.invoke('foo'))
    })()
  }, [])

  return (
    <>
      <div>Hello, {data?.message}!</div>
    </>
  )
}
