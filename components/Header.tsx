import React from 'react'
import Link from "next/link"


const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <img src="/logo.svg" alt="Logo de l'application" />
        </Link>
      </div>
      <div></div>
   </header>
  )
}

export default Header