import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-screen text-white Parent bg-slate-900 space-y-4">
      <div className="container">
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

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="bg-sky-500 p-6 rounded-lg">First Column</div>
          <div className="bg-sky-500 p-6 rounded-lg">Second Column</div>
          <div className="bg-sky-500 p-6 rounded-lg">Third Column</div>
          <div className="bg-sky-500 p-6 rounded-lg">Fourth Column</div>
        </div>
      </div>

      <div className="container px-3 columns-3">
        <p>Magna dolore cupidatat est pariatur et. Ut culpa commodo nisi duis ad eiusmod nisi. Id laboris exercitation minim ea ad do irure adipisicing cillum. Proident cupidatat labore excepteur veniam incididunt est. Et laborum qui exercitation commodo id consequat dolore enim incididunt dolore do et exercitation. In magna aliqua eiusmod commodo sint ut labore aliqua sit do Lorem.</p>
        <p>Ipsum sit consequat in adipisicing. Anim aute ad id sit consequat laborum duis in adipisicing exercitation ullamco magna quis mollit. Ea deserunt dolor anim tempor nostrud sit minim velit aute qui sunt cupidatat excepteur ut. Laborum sint ad eu qui Lorem mollit sint excepteur in aute aliquip deserunt. Eu magna nostrud voluptate officia laboris eu veniam ad dolore ipsum sunt. Lorem consectetur laboris cillum eiusmod occaecat.</p>
        <p>Laboris ex culpa exercitation dolore culpa exercitation elit in ullamco officia. Aliqua consectetur consectetur deserunt quis eu irure aute cupidatat dolore reprehenderit enim deserunt veniam occaecat. Fugiat exercitation amet quis consequat velit nulla excepteur.</p>
      </div>
    </div>
  )
}
