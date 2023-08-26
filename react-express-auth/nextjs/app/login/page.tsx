"use client"

import axios from "axios"
import { FormEvent, useState } from "react"

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('')


    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();

        const url = 'http://localhost:3000/api/login'
        const formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            setIsLoading(true)
            const response = await axios.post(url, { email, password })
            console.log('from client >> ',response)

        } catch (err: any) {
            setErrMsg(err.data.response.message)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div>

            <form onSubmit={submitHandler} className='flex flex-col gap-5'>

                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>Email</label>
                    <input className='border border-gray-200 rounded' name='email' type='email' />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor='password'>Password</label>
                    <input className='border border-gray-200 rounded' name='password' type='password' />
                </div>
                {errMsg && <small className="text-red-400">{JSON.stringify(errMsg)}</small>}
                <button disabled={isLoading} className='bg-slate-200 rounded py-2'>Submit</button>
            </form>
        </div>
    )
}
