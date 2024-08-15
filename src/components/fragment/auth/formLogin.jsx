import React, { useState } from 'react'
import ProfileIcons from '../../element/icons/profileIcons'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { Link, useNavigate } from 'react-router-dom'
import LockIcons from '../../element/icons/lockIcons'
import { Login } from '../../../service/auth.service'

const FormLogin = () => {
  const [loginFail, setLoginFail] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }

    Login(data, (status, res) => {
      if (status) {
        const { role } = res.data
        if (role === "admin") {
          localStorage.setItem("secretKey", res.data.secret_key)
          console.log("Kamu adalah admin", res.message)
          alert("Kamu adalah admin")
          navigate('/dashboard-admin')
        } else if (role === "user") {
          localStorage.setItem("secretKey", res.data.secret_key)
          console.log("Kamu adalah user")
          alert("kamu adalah user")
          navigate('/dashboard-user')
        } else {
          setLoginFail(res.message)
          console.log('Role tidak dikenali')
        }
      } else {
        setLoginFail(res.message)
      }
    })
  }
  return (
    <div className='w-full h-screen flex'>
      <div className='w-full h-full bg-white flex justify-center items-center'>
        <div className='w-96 h-96 border shadow-lg rounded-xl flex items-center animate-flip-down bg-white'>
          <div className='w-full'>
            <h1 className='font-semibold pl-6 text-xl'>Login</h1>
            <h1 className='pb-5 flex justify-center'>
              <span className='font-semibold mr-1'>Selamat Datang, </span> Harap masuk terlebih dahulu!
            </h1>
            <form onSubmit={handleLogin} className='p-2'>
              <Label htmlFor='username'>
                <ProfileIcons size='size-4 mr-1' />
                Username</Label>
              <Input
                type='text'
                name='username'
                placeholder='Jhon Doe'
                autoComplete='current-username'
              />
              <Label htmlFor='password'>
                <LockIcons style='size-4 mr-1' />
                Password</Label>
              <Input
                type='password'
                name='password'
                placeholder='*******'
                autoComplete='current-password'
              />
              <ButtonCustom
                type='submit'
                bulat='rounded-xl'
                color='bg-blue-400 border w-full hover:bg-blue-300'
                text='text-white hover:text-white mt-5'
              >Login</ButtonCustom>
              <div className='text-red-600 flex justify-center text-xs'>
                <p>{loginFail}</p>
              </div>
              <h1 className='p-2 pt-2 text-sm font-semibold text-black'>Dont have an account?
                <Link to='/register'>
                  <span className='m-1 text-red-500'>Please Register!</span>
                </Link>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormLogin
