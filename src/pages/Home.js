import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineDotsHorizontal, HiOutlinePaperAirplane, HiOutlineFlag } from "react-icons/hi"
import { FaRegComment, FaRegSmileBeam } from "react-icons/fa"
import Header from '../components/Header'


export default function Home(props) {

    const handleSubmit = e => {
        e.preventDefault()
    }

    const [comment, setComment] = useState("")


    return (
        <div className="bg-gray-50 w-full h-full">
            <Header />
            <div className='flex justify-center mt-6 gap-x-7'>

                <div>

                    <div className=' h-28 w-[451px] border border-gray-200 flex rounded-lg'>

                        <div className='px-2 flex flex-col justify-center text-center'>
                            <a href='#' className='bg-blue-100 rounded-full w-[60px] h-[60px] border-2 border-red-400'></a>
                            <span className='font-light text-sm'>Emre</span>
                        </div>
                        <div className='px-2 flex flex-col justify-center text-center'>
                            <a href='#' className='bg-blue-100 rounded-full w-[60px] h-[60px] border-2 border-red-400 '></a>
                            <span className='font-light text-sm'>Emre</span>
                        </div>
                        <div className='px-2 flex flex-col justify-center text-center'>
                            <a href='#' className='bg-blue-100 rounded-full w-[60px] h-[60px] border-2 border-red-400 '></a>
                            <span className='font-light text-sm'>Emre</span>
                        </div>
                        <div className='px-2 flex flex-col justify-center text-center'>
                            <a href='#' className='bg-blue-100 rounded-full w-[60px] h-[60px] border-2 border-red-400 '></a>
                            <span className='font-light text-sm'>Emre</span>
                        </div>
                        <div className='px-2 flex flex-col justify-center text-center'>
                            <a href='#' className='bg-blue-100 rounded-full w-[60px] h-[60px] border-2 border-red-400 '></a>
                            <span className='font-light text-sm'>Emre</span>
                        </div>
                        <div className='px-2 flex flex-col justify-center text-center'>
                            <a href='#' className='bg-blue-100 rounded-full w-[60px] h-[60px] border-2 border-red-400 '></a>
                            <span className='font-light text-sm'>Emre</span>
                        </div>

                    </div>

                    <div className='w-[451px] bg-gray-100 container mx-auto mt-3 rounded-lg border border-gray-200 object-center h-auto'>
                        <div className='flex justify-between p-2 rounded-t-lg bg-white items-center'>
                            <div className='flex items-center justify-center'>
                                <div className='rounded-full w-[40px] h-[40px] border-2 border-red-400 bg-blue-200'>

                                </div>
                                <div className='text-sm font-bold ml-2'>emreozkpln</div>

                            </div>
                            <div><HiOutlineDotsHorizontal size={22} /></div>

                        </div>
                        <div >
                            <img className='h-[460px]' src='https://media-exp1.licdn.com/dms/image/D4D03AQEFHpjzZImHIg/profile-displayphoto-shrink_200_200/0/1668452923547?e=1676505600&v=beta&t=5T7fgY0jM_aM0SqoKo_DO6a3bdEGAHQ3ip1TXa2hKi8' />
                        </div>

                        <div className='bg-white rounded-b-lg p-3'>
                            <div className='flex justify-between '>
                                <div className='flex gap-3'>
                                    <div><AiOutlineHeart size={27} /></div>
                                    <div><FaRegComment size={25} /></div>
                                    <div><HiOutlinePaperAirplane size={26} /></div>
                                </div>
                                <div>
                                    <HiOutlineFlag size={26} />
                                </div>
                            </div>
                            <div className='text-black font-semibold text-sm mt-2'>135 beğenme</div>
                            <div className='text-black font-semibold text-sm mt-1 flex'>emreozkpln <div className='text-gray-600 font-medium ml-1'>Harika</div></div>
                            <div className='text-sm text-gray-500 font-light mt-1'>55 yorumun tümünü gör</div>
                            <div className='text-xs text-gray-500 font-light mt-1'>2 gün önce</div>
                            <div className="h-px bg-gray-300 flex-1 mt-3" />
                            <div className='pt-3 flex'>

                                <div>
                                    <FaRegSmileBeam size={27} />
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" value={comment} onChange={e => setComment(e.target.value)} className='outline-none pl-3 placeholder:text-sm' placeholder='Yorum ekle...' />
                                    <button disabled={!comment} className="text-blue-500 ml-40 font-semibold disabled:text-opacity-50">Paylaş</button>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='mt-6'>
                    <div className='flex justify-around items-center gap-x-1'>
                        <div className='flex text-center items-center'>
                            <div className='rounded-full border border-gray-300 w-16 h-16'></div>
                            <div>
                                <div className='text-sm font-semibold'>emreozkpln</div>
                                <div className='text-sm font-normal text-gray-400 ml-3.5'>Emre Özkaplan</div>
                            </div>
                        </div>
                        <div className='font-medium text-blue-400 text-xs ml-20'>Geçiş yap</div>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <div className='text-sm font-medium text-gray-400'>
                            Senin için Öneriler
                        </div>
                        <div className='text-xs font-normal'>
                            Tümünü gör
                        </div>
                    </div>
                    <div className='flex text-center items-center justify-between mt-3'>
                        <div className='flex text-center items-center gap-x-3'>
                            <div className='rounded-full border border-gray-300 w-10 h-10'></div>
                            <div className='text-sm font-normal'>emreozkpln</div>
                        </div>
                        <div className='text-xs text-blue-500 font-semibold'>Takip et</div>
                    </div>
                    <div className='flex text-center items-center justify-between mt-3'>
                        <div className='flex text-center items-center gap-x-3'>
                            <div className='rounded-full border border-gray-300 w-10 h-10'></div>
                            <div className='text-sm font-normal'>emreozkpln</div>
                        </div>
                        <div className='text-xs text-blue-500 font-semibold'>Takip et</div>
                    </div>
                    <div className='flex text-center items-center justify-between mt-3'>
                        <div className='flex text-center items-center gap-x-3'>
                            <div className='rounded-full border border-gray-300 w-10 h-10'></div>
                            <div className='text-sm font-normal'>emreozkpln</div>
                        </div>
                        <div className='text-xs text-blue-500 font-semibold'>Takip et</div>
                    </div>
                    <div className='flex text-center items-center justify-between mt-3'>
                        <div className='flex text-center items-center gap-x-3'>
                            <div className='rounded-full border border-gray-300 w-10 h-10'></div>
                            <div className='text-sm font-normal'>emreozkpln</div>
                        </div>
                        <div className='text-xs text-blue-500 font-semibold'>Takip et</div>
                    </div>
                    <div className='flex text-center items-center justify-between mt-3'>
                        <div className='flex text-center items-center gap-x-3'>
                            <div className='rounded-full border border-gray-300 w-10 h-10'></div>
                            <div className='text-sm font-normal'>emreozkpln</div>
                        </div>
                        <div className='text-xs text-blue-500 font-semibold'>Takip et</div>
                    </div>

                    <div className='mt-6'>
                        <div className='text-gray-300 text-xs'>Hakkında-Yardım-Basın-API-İş Fırsatları-Gizlilik</div>
                        <div className='text-gray-300 text-xs'>Koşullar-Konumlar-Dil</div>
                    </div>
                    <div className='text-gray-300 text-xs mt-4'>© 2022 INSTAGRAM FROM META</div>
                </div>
            </div>

        </div>
    )
}
