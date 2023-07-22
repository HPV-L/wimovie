import React from 'react'
import Link from 'next/link'
type Props ={
    title:string
    address:string
}
const MenuItem = ({title, address} :Props) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-red-600">
        <span className="hidden sm:inline my-2 text-sm">{title}</span>
      </Link>
    </div>
  )
}

export default MenuItem