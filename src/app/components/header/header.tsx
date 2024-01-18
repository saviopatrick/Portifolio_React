import Image from 'next/image'
import "./header.scss"

export function Header(){
  return(
    <>
    <div className='header'>
      <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <h1>Hi, i'm Sávio!</h1>
        <h2>Software Developer</h2>
      </div>
    </>
  )
}