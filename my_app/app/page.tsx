import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className="border-8 border-green-600">
      Hello world!
    </h1>
    <h1 className="text-portfoliorandom">
      Second title
    </h1>
    </div>
  )
}
