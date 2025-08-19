import { useState } from 'react';
import ProfileIcons from '../../element/icons/profileIcons'
import ButtonCustom from '../../element/button/button'
import Label from '../../element/form/label'
import Input from '../../element/form/input'
import { Link } from 'react-router-dom';
import LockIcons from '../../element/icons/lockIcons'
import { Login } from '../../../service/auth.service'
import pp from '../../../assets/combucha.jpg'

const FormLogin = () => {
  const [loginFail, setLoginFail] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }

    try {
      const res = await Login(data)
      if (res.data.status === 'success') {
        const role = res.data.data.role

        if (role === "admin") {
          localStorage.setItem('username', data.username)
          localStorage.setItem('role', role)
          localStorage.setItem("secretKey", res.data.data.secret_key)

          alert("Berhasil Login, Kamu adalah Admin!")

          window.location.href = '/dashboard-admin'

          return
        } else if (role === "user") {
          localStorage.setItem('username', data.username)
          localStorage.setItem('role', res.data.data.role)
          localStorage.setItem("secretKey", res.data.data.secret_key)

          alert("Berhasil Login!")
          window.location.href = '/dashboard-user'

          return
        }
      }

      throw res
    } catch (error) {
      if (error.data.status === 'failed') {
        alert(error.data.message || 'Gagal melakukan Login!')
        setLoginFail('Gagal melakukan login!')

        localStorage.removeItem('username')
        localStorage.removeItem('role')
        localStorage.removeItem('secretKey')

        return
      }

      alert('Role tidak dikenali')
      setLoginFail('Gagal melakukan login!')

      localStorage.removeItem('username')
      localStorage.removeItem('role')
      localStorage.removeItem('secretKey')
    }
  }

  return (
    <div className='w-full h-screen flex'>
      <div className='w-full h-full bg-red-50 flex justify-center items-center'>
        <div className='w-96 h-96 border shadow-lg rounded-xl flex items-center animate-fade-left bg-white'>
          <div className='w-full'>
            <div className='w-full flex justify-center items-center'>
              <img src={pp} alt="Logo" className='w-56 mt-3 mb-2 flex justify-center' />
            </div>
            {/* <h1 className='pb-5 flex justify-center text-xs'>
              <span className='font-semibold mr-1 text-xs'>Selamat Datang, </span> Harap masuk terlebih dahulu!
            </h1> */}
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
                color='bg-red-800 border w-full hover:bg-red-900'
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
