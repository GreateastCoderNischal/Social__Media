import React from 'react'

function SignIn() {
  return (
    <form className='flex flex-col w-full h-full p-10 text-white'>
    <div>
      <h1 className='font-main font-bold text-[25px] my-5 text-center'>
        ValorGram
      </h1>
    </div>
    <div className='m-3'>
      <h1 className='font-main font-bold m-2 text-[35px] text-center'>
        Log In To Your Account
      </h1>
      <p className='text-purple-400 text-center'>
      Welcome back! Please enter your details.
      </p>
    </div>
    <div className='m-4'>

    <div className="form-outline mb-4">
      <label className="form-label">Email address</label>
      <input type="email" id="form2Example1" className="form-control" />
    </div>

    <div className="form-outline mb-1">
      <label className="form-label" >Password</label>
      <input type="password" id="form2Example2" className="form-control" />
    </div>
    <button type="button" data-mdb-button-init data-mdb-ripple-init className="mt-4 btn btn-primary btn-block mb-4 w-full">Sign in</button>    
    <div className='text-center'>Don't Have Account ? <span className='text-purple-800 cursor-pointer'>SignUp</span></div>
    </div>
  </form>
  )
}

export default SignIn
