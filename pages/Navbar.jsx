import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {

    const onScroll = (event) => {
      if (window.scrollY > 70){
        setToggle(true)
      }else 
        setToggle(false)
    };
      
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])


  return (
    <div className={`nav ${toggle && 'toggled'}`} >
        <Link href="/" className="navItem">Explore</Link>
        <Link href="/" className="navItem">Trip finder</Link>
        <Link href="/" className="navItem"><Image src={"/logo.png"} width={100} height={100} alt='logo' quality={100} /> </Link>
        <Link href="/" className="navItem">News</Link>
        <Link href="/" className="navItem">Contact</Link>
    </div>
  )
}
