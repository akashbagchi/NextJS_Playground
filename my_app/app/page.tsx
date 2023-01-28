import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='space-y-5'>
      <div className="Parent">
        <div>Header</div>
        <div className="flex items-center justify-evenly">
          <div className=" bg-red-400">Sidebar</div>
          <div className=' bg-blue-300'>
            <h1 className='text-2xl font-bold'>Main Content</h1>
            <p>
              Commodo elit non nulla mollit tempor esse dolore. Fugiat incididunt amet est exercitation quis Lorem deserunt. Anim sint mollit Lorem deserunt.
            </p>
          </div>
          <div className='bg-red-400'>Another sidebar</div>
        </div>
      </div>
    </main>
  )
}
