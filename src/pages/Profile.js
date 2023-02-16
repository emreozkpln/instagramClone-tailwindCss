import React from 'react'
import { GrSettingsOption } from "react-icons/gr"
import { AiOutlinePlus } from "react-icons/ai"
import { BiUserPin } from "react-icons/bi"
import { useState } from 'react'
import Header from '../components/Header'

export default function Profile() {

    
    return (
        
        <div className='flex flex-col items-center '>
            <Header/>
            <div className='flex flex-col gap-y-6'>
                <div className='flex justify-center m-5 gap-x-20'>
                    <div>
                        <img className='rounded-full h-40 w-40 border border-gray-200' src='https://media-exp1.licdn.com/dms/image/D4D03AQEFHpjzZImHIg/profile-displayphoto-shrink_200_200/0/1668452923547?e=1676505600&v=beta&t=5T7fgY0jM_aM0SqoKo_DO6a3bdEGAHQ3ip1TXa2hKi8' />
                    </div>
                    <div className='flex flex-col gap-y-7'>
                        <div className='flex gap-x-4'>
                            <div className='text-3xl font-thin'>
                                emreozkpln
                            </div>
                            <button className=' font-semibold px-3 py-1 rounded-md bg-gray-200 '>
                                Profili düzenle
                            </button>
                            <button>
                                <GrSettingsOption />
                            </button>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-x-1'>
                                <div className='font-semibold '>
                                    1
                                </div>
                                <div>
                                    gönderi
                                </div>
                            </div>
                            <div className='flex gap-x-1'>
                                <div className='font-semibold'>
                                    240
                                </div>
                                <div>
                                    takipçi
                                </div>
                            </div>
                            <div className='flex gap-x-1'>
                                <div className='font-semibold'>
                                    296
                                </div>
                                <div>
                                    takip
                                </div>
                            </div>
                        </div>
                        <div className='font-medium'>
                            Emre Özkaplan
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-3 font-medium text-sm'>
                    <AiOutlinePlus className='text-gray-300 p-4 rounded-full border border-gray-300' size={90} />
                    <div className='ml-8'>Yeni</div>
                </div>

                <div className="">
                    <div className="h-px bg-gray-300 flex-1" />
                </div>
                <nav className='flex gap-x-7 items-center justify-center -mt-3 relative'>

                    

                    <button  className='flex gap-x-1 text-xs text-gray-400 font-semibold'>
                        <div className='mt-0.5'>
                            <BiUserPin />
                        </div>
                        <div>
                            GÖNDERİLER
                        </div>
                    </button>
                    <button  className='flex gap-x-1 text-xs text-gray-400 font-semibold'>
                        <div className='mt-0.5'>
                            <BiUserPin />
                        </div>
                        <div>
                            KAYDEDİLENLER
                        </div>
                    </button>
                    <button  className='flex gap-x-1 text-xs text-gray-400 font-semibold'>
                        <div className='mt-0.5'>
                            <BiUserPin />
                        </div>
                        <div>
                            ETİKETLENENLER
                        </div>
                    </button>
                </nav>
                <div>
                    <img className='h-80 w-80' src='https://media-exp1.licdn.com/dms/image/D4D03AQEFHpjzZImHIg/profile-displayphoto-shrink_200_200/0/1668452923547?e=1676505600&v=beta&t=5T7fgY0jM_aM0SqoKo_DO6a3bdEGAHQ3ip1TXa2hKi8' />
                </div>
            </div>
        </div>

    )
}
