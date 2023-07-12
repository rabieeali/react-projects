import Layout from "src/shared/Layout";
import { useState, ChangeEvent, FormEvent } from 'react'
import { Credentials } from "src/types";
import { useLoginMutation } from 'src/redux/authApi'
import { useNavigate } from 'react-router-dom'
import { ApplicationRoutes } from "src/routes";
import { useDispatch } from "react-redux";
import { setUser } from "src/redux/authSlice";

type ErrorType = {
  data: {
    message: string
  }
}

export default function Login() {
  const [formVAl, setFormVal] = useState<Credentials>({ email: '', password: '' })
  const [login, { isLoading, error }] = useLoginMutation()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setFormVal((pre) => ({ ...pre, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result: any = await login(formVAl)
    if (result.data) {
      dispatch(setUser(result.data.data))
      navigate(ApplicationRoutes.dashboard)
    }
  }

  return (
    <Layout>
      <form style={{ width: '420px' }} className="mx-auto shadow rounded p-4 my-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-3">Email</label>
        </div>
        <input className='form-control' value={formVAl.email} onChange={handleChange} type='email' name='email' />
        <div className="mb-3">
          <label className="mb-3">Password</label>
          <input className='form-control' value={formVAl.password} onChange={handleChange} type='password' name='password' />
        </div>
        {error && (<small className="text-danger">{(error as ErrorType).data.message}</small>)}
        <button disabled={isLoading} className="btn btn-success d-block mt-4 ms-auto">Login</button>
      </form>
    </Layout>
  )
}
