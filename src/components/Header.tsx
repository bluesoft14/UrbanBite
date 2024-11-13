'use client'
import { Link } from '@/src/navigation'
import { FC } from 'react'
import LogoIcon from '../app/icons/logo'
import ThemeSwitch from './ThemeSwitch'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-5 pt-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-14 w-14'>
            <LogoIcon />
          </div>
          <strong className='mx-2 select-none'>Urban Pizza</strong>
        </div>
      </Link>
      <div className=' hidden flex-row items-center gap-3 sm:block'>
        <ThemeSwitch />
      </div>
    </div>
  )
}
