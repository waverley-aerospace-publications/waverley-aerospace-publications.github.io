import React from "react"
import { Link } from "react-router-dom"

export function Navbar() {

    const links = ['home', 'about', 'books', 'contact']



    return (
        <div className='bg-gray-100 w-full px-5 py-2 border-t-4 border-blue-200 mt-2'>
            <div className='flex w-min mx-auto'>
                {links.map((link, index) => (
                    <div key={`${index}: ${link}`} className='mr-8'>
                        <Link to={link === 'home' ? '/' : `/${link}`}>
                            <button className='capitalize font-header text-xs'>{link}</button>
                        </Link>
                    </div>
                ))}
            </div>
      </div>
    )
}
  