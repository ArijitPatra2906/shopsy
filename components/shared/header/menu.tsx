import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/signin' className='flex item-center header-button'>
          Hello, Sign in
        </Link>

        <Link href='/cart' className='header-button'>
          <div className='flex items-center gap-1'>
            <ShoppingCartIcon className='h-8 w-8' />
          </div>
        </Link>
      </nav>
    </div>
  )
}
