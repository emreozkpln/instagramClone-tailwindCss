import React from 'react'
import { IoIosArrowDown, IoIosSettings } from "react-icons/io"
import { FiUserCheck } from "react-icons/fi"
import { BiUserCircle } from "react-icons/bi"
import { MdOutlinePublishedWithChanges } from "react-icons/md"
import { Link } from 'react-router-dom'
import Search from '../components/Search.js'
import { AiFillHome, AiOutlinePlusSquare, AiOutlineCompass, AiOutlineHeart, AiOutlineStar } from "react-icons/ai"
import { BsMessenger, BsExclamationSquare } from "react-icons/bs"
import { useState } from 'react'
import { HiOutlineFlag } from 'react-icons/hi'

export default function Header(props) {
    const [isOpen, setOpen] = useState(false)
    const [isProfile, setProfile] = useState(false)
  return (
    <div className='bg-white h-[60px] border border-gray-200 w-full flex justify-evenly items-center px-36'>
                <div className='flex items-center justify-center gap-x-2'>
                    <div className='h-[29px] w-[103px]'>
                        <a href='#'><img src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' /></a>
                    </div>
                    <div className='relative'>
                        <button onClick={() => setOpen(!isOpen)}><IoIosArrowDown /></button>
                        {isOpen && (
                            <div className='absolute top-7 right-2 bg-white rounded-lg shadow-lg flex flex-col transition-all'>
                                <div className='flex items-center px-5 py-2 hover:bg-gray-100 gap-x-3'>
                                    <div><FiUserCheck /></div>
                                    <button className='text-sm font-normal'>Takip</button>
                                </div>

                                <div className='flex items-center px-5 py-2 hover:bg-gray-100 gap-x-3'>
                                    <div><AiOutlineStar /></div>
                                    <button className='text-sm font-normal'>Favoriler</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Search />
                <div className='flex flex-row gap-5 items-center'>
                    <button><Link to='/home'><AiFillHome size={27} /></Link></button>
                    <div><BsMessenger size={21} /></div>
                    <div><AiOutlinePlusSquare size={27} /></div>
                    <div><AiOutlineCompass size={27} /></div>
                    <div><AiOutlineHeart size={27} /></div>
                    <div className='relative'>
                        <button onClick={() => setProfile(!isProfile)} className='focus:ring-1 ring-black rounded-full'><div className='rounded-full w-[25px] h-[25px] border border-gray-400'></div></button>
                        {isProfile && (
                            <div className='absolute top-7 right-0 bg-white rounded-md shadow-md py-2'>
                                <div className='flex flex-col gap-y-2'>
                                    <div className='h-7 w-[170px] hover:bg-gray-50'>
                                    <Link to='/profile'><div className='font-normal flex items-center py-1 gap-x-2 pl-3'><BiUserCircle /> Profil
                                        </div></Link>
                                    </div>
                                    <div className='h-7 w-[170px] hover:bg-gray-50'>
                                        <div className='font-normal hover:bg-gray-50 flex items-center py-1 gap-x-2 pl-3'><HiOutlineFlag /> Kaydedildi</div>
                                    </div>
                                    <div className='h-7 w-[170px] hover:bg-gray-50'>
                                        <div className='font-normal hover:bg-gray-50 flex items-center py-1 gap-x-2 pl-3'><IoIosSettings /> Ayarlar</div>
                                    </div>
                                    <div className='h-7 w-[170px] hover:bg-gray-50'>
                                        <div className='font-normal hover:bg-gray-50 flex items-center py-1 gap-x-2 pl-3'><BsExclamationSquare /> Bir sorun bildir</div>
                                    </div>
                                    <div className='h-7 w-[170px] hover:bg-gray-50'>
                                        <div className='font-normal hover:bg-gray-50 flex items-center py-1 gap-x-2 pl-3'><MdOutlinePublishedWithChanges />Hesap değiştir</div>
                                    </div>
                                    <div className='h-px bg-gray-100 w-full'></div>
                                    <Link to='/'>
                                    <div className='h-7 w-[170px] hover:bg-gray-50 pl-3'>
                                        <button onClick={props.signOut}>Çıkış yap</button>
                                    </div></Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
  )
}
