
import { Navigate, Outlet } from 'react-router-dom'
const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (

        <Navigate to="/" />
      )
        : (
          <>
            <section className='flex flex-1 justify-center bg-black'>
              <Outlet />
              <img src='images/bg.svg' className='w-full' />
            </section>
          </>
        )}
    </>
  )
}

export default AuthLayout