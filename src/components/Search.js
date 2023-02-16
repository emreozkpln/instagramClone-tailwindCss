import React from 'react'
import {BsSearch} from "react-icons/bs"
import { useState } from 'react'

export default function Search() {
  const [write, setwrite] = useState('')
  return (
    <form className='relative'>
        <input onChange={e => setwrite(e.target.value)} value={write} required={true} type="text" className='h-9 rounded-xl outline-none bg-gray-100 px-3 peer w-60 '/>
        <small className='absolute top-2.5 left-4 peer-focus:hidden peer-valid:hidden text-gray-500 '><BsSearch size={17}/></small>
        <span className='absolute top-1 left-12 text-lg font-thin peer-focus:left-3 text-gray-500 peer-valid:hidden'>Search</span>
    </form>
  )
}
