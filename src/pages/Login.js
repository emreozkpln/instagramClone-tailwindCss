import React from 'react'
import { useState } from 'react'
import { GrFacebook } from "react-icons/gr"
import { Link } from 'react-router-dom'


export default function Login(props) {

    const handleSubmit = e => {
        e.preventDefault()
    }
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    return (
        
        <div className="flex w-full h-full items-center justify-center">
            <div>
                <img className="h-[581px] w-[380px]" src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="border-2 border-gray-100">
                    <div className="py-10 px-20">
                        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
                    </div>

                    <div className="px-10">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <label className="block relative">
                                <input onChange={e => setUsername(e.target.value)} value={username} required={true} className="text-sm w-full outline-none border-2 border-gray-200 h-[38px] px-2 focus:border-gray-400 valid:pt-3 bg-gray-50 peer" />
                                <small className="absolute text-gray-400 top-1/2 left-[9px] -translate-y-1/2 transition-all peer-valid:top-2.5">Telefon numarası kullanıcı adı veya e-posta</small>
                            </label>
                            <label className="block relative">
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password" required={true} className="text-sm w-full outline-none border-2 border-gray-200 h-[38px] px-2 focus:border-gray-400 valid:pt-3 bg-gray-50 peer" />
                                <small className="absolute text-gray-400 top-1/2 left-[9px] -translate-y-1/2 transition-all peer-valid:top-2.5">Şifre</small>
                            </label>
                            <Link to='/home'><button type="submit" disabled={!username || !password} onClick={props.signIn} className="text-white w-full bg-blue-500 text-center rounded p-1 text-sm mt-2"> Giriş yap</button></Link>
                            <div className="flex items-center">
                                <div className="h-px bg-gray-300 flex-1" />
                                <span className=" text-sm text-gray-500 px-4"> YA DA </span>
                                <div className="h-px bg-gray-300 flex-1" />
                            </div>
                            <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold text-sm mt-3"><GrFacebook /> Facebook ile Giriş Yap</div>
                            <a href="/" className="text-xs text-center p-4">Şifreni mi unuttun?</a>
                        </form>
                    </div>
                </div>
                <div className="border-2 border-gray-100 flex justify-center gap-1 p-4 font-extralight text-black text-sm">
                    Hesabın yok mu? <div className="text-blue-400 font-semibold">Kaydol</div>
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="text-center text-sm font-light mt-2">Uygulamayı indir.</div>
                    <div className="flex gap-2 justify-center">
                        <img className="h-10" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png" />
                        <img className="h-10" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
