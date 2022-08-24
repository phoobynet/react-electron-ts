import HelloWorld from '@/components/HelloWorld'
import { invoke } from '@/libs/invoke'
import { useEffect, useState } from 'react'

export default function Home(): JSX.Element {
  const [data, setData] = useState<{ message: string }>()

  useEffect(() => {
    void (async () => {
      setData(await invoke<{ message: string }>('foo'))
    })()
  }, [])

  return (
    <div className="container max-w-3xl mx-auto">
      <div>Foo says, &quot;{data?.message}&quot;</div>
      <HelloWorld />
    </div>
  )
}
