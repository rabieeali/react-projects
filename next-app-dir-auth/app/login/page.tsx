"use client"
import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { login } from '@/api-services'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [formVal, setFormVal] = useState({ email: 'eve.holt@reqres.in', password: 'cityslicka' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setFormVal((pre) => ({ ...pre, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { email, password } = formVal

        try {
            if (!email || !password) return setError('Please Fill The Fields')
            setLoading(true)
            const response = await login(true, formVal)
            router.replace('/profile')
            alert(response)
        } catch (err: any) {
            console.log(err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setError('')
    }, [formVal.email, formVal.password])

    return (
        <main className='container'>
            <form onSubmit={handleSubmit} className="col-6 mx-auto shadow-lg p-3 rounded-2 d-flex flex-column gap-3">
                <div>
                    <label className="mb-2" htmlFor="email">Email</label>
                    <input value={formVal.email} onChange={handleChange} autoComplete='false' className="form-control" id="email" name="email" type="email" />
                </div>
                <div>
                    <label className="mb-2" htmlFor="password">Password</label>
                    <input value={formVal.password} onChange={handleChange} className="form-control" id="password" name="password" type="password" />
                </div>
                {<small className='text-danger'>{error}</small>}
                <button type='submit' className="w-25 ms-auto btn btn-sm btn-primary" disabled={loading}>Submit</button>
            </form>
        </main>
    )
}
