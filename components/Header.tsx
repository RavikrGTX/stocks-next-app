import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"
import Dropdown from "./Dropdown"

const Header = () => {
  return (
    <header className='sticky top-0'>

        <div className='container header-wrapper bg-gray-800'>
            <Link href="/">
             <Image src="/assets/icons/logo.svg" alt="logo" width={140} height={32} className="h-8 w-uto cursor-pointer"/>
            </Link>
            <nav className="hidden sm:block">
              <NavItems/>
            </nav>
           <Dropdown/>
        </div>
    </header>
  )
}

export default Header