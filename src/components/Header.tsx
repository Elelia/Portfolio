import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <h1 className='font-bold'>Lisa Lucas</h1>
      <div className='flex items-center justify-center gap-2 md:gap-8'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/experience'>Experience</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Header