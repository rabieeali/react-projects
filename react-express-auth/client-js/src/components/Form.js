import { useEffect, useState } from 'react'
import { AuthService } from '../api'
import { useCookies } from 'react-cookie'
import { useAuth } from '../hooks'
import { useNavigate } from 'react-router-dom'

export function Form() {
    const [formVal, setFormVal] = useState({ email: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const { setAuth } = useAuth()
    const navigate = useNavigate()

    // eslint-disable-next-line 
    const [cookies, setCookie] = useCookies(['tut']);
    let now = new Date();
    let next24Hours = new Date(now.getTime() + (24 * 60 * 60 * 1000));

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = formVal
        const { login } = new AuthService()

        if (!email || !password) return setError('all fields are required')

        try {
            setIsLoading(true)
            const { data } = await login(email, password)
            setCookie('tut', data.token, { path: '/', expires: next24Hours });
            setAuth({ email: data.email, first_name: data.first_name, last_name: data.last_name })
            navigate('/')
        } catch (err) {
            console.log(err)
            setError(err.response.data.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setFormVal((pre) => ({ ...pre, [name]: value }))
    }

    useEffect(() => {
        setError('')
    }, [formVal.email, formVal.password])

    return (
        <form className='col-md-6 mx-auto shadow p-3 rounded d-flex flex-column gap-3' onSubmit={handleSubmit}>
            <div>
                <label className='mb-2'>Email</label>
                <input value={formVal.email} onChange={handleChange} className='form-control' type='email' name='email' autoComplete='true' />
            </div>
            <div>
                <label className='mb-2'>Password</label>
                <input value={formVal.password} onChange={handleChange} className='form-control' type='password' name='password' autoComplete='true' />
            </div>
            {error && <small className='text-danger text-capitalize'>{error}</small>}
            <button disabled={isLoading} className='btn btn-primary mt-3 d-block ms-auto'>Submit</button>
        </form>
    )
}