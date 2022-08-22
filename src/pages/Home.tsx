import HelloWorld from '@/components/HelloWorld'
import { useEffect, useState } from 'react'

const { ipcRenderer } = window.require('electron')

export default function Home() {
  const [data, setData] = useState<{ message: string }>()

  useEffect(() => {
    ;(async () => {
      setData(await ipcRenderer.invoke('foo'))
    })()
  }, [])

  return (
    <div className="container max-w-3xl mx-auto">
      <div>Foo says, "{data?.message}"</div>
      <HelloWorld />
    </div>
  )
}
