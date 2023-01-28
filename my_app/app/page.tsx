import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex-column space-y-5'>
      <div className='bg-red-500 py-5 pl-4 m-2 rounded-lg w-4/5 mx-auto'>
        <h1 className='text-3xl underline mb-3 font-bold'>Title 1</h1>
        <h2 className='text-2xl line-through'>Title 2</h2>
        <h3 className='text-xl'>Title 3</h3>
      </div>
      <div className='bg-slate-500 py-5 pl-4 mb-2 rounded-lg w-4/5 mx-auto'>
        <p className='text-base overline decoration-slate-500'>A regular paragraph</p>
        <p className='text-sm'>A description paragraph</p>
        <p className="note text-xs">A little note</p>
      </div>
    </main>
  )
}
