import React, { useEffect, useState } from 'react'
import ProfileIcons from '../../element/icons/profileIcons'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { Link, useNavigate } from 'react-router-dom'
import LockIcons from '../../element/icons/lockIcons'
import { Register } from '../../../service/auth.service'
import pp from '../../../assets/combucha.jpg'

const FormRegistrasi = () => {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault()

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
      confrimasi_password: e.target.confirmPassword.value
    }

    Register(data, (status, res) => {
      console.log(status)
      console.log(res)
      if (status) {
        navigate('/login')
      } else {
        setMessage(res.message)
      }
    })
  }
  return (
    <div className='w-full h-screen flex'>
      <div className='w-full h-full bg-red-50 flex justify-center items-center'>
        <div className='w-96 h-[500px] border shadow-lg rounded-xl flex items-center animate-fade-right bg-white'>
          <div className='w-full'>
            <div className='w-full flex justify-center items-center'>
              <img src={pp} alt="Logo" className='w-56 mb-5 flex justify-center' />
            </div>
            {/* <h1 className='pb-5 flex justify-center'>
              <span className='font-semibold mr-1'>Selamat Datang, </span> Harap Daftar terlebih dahulu!
            </h1> */}
            <form onSubmit={handleRegister} className='p-2'>
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
              <Label htmlFor='confirmPassword'>
                <LockIcons style='size-4 mr-1' />
                Confirm Password</Label>
              <Input
                type='password'
                name='confirmPassword'
                placeholder='*******'
                autoComplete='new-password'
              />
              <ButtonCustom
                type='submit'
                bulat='rounded-xl'
                color='bg-red-800 border w-full hover:bg-red-900'
                text='text-white hover:text-white mt-5'
              >Register</ButtonCustom>
              {message &&
                <div className='text-red-600 flex justify-center text-xs'>
                  <p>{message}</p>
                </div>
              }
              <h1 className='p-2 text-sm font-semibold text-black'>Have an Account?
                <Link to='/login'>
                  <span className='m-1 text-red-500'>Login!</span>
                </Link>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormRegistrasi
