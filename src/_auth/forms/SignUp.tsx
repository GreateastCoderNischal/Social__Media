import React, { useState } from 'react'
import { createUser } from '../../lib/Appwrite/Api';

function SignUp() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [wrong, setWrong] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name||!password||!email||!userName||password.length<8){
      console.log('wrong')
      setWrong(true)}
    else{

      setWrong(false);
      console.log(wrong)
      let user = {
        name: name,
        password: password,
        email: email,
        username: userName,
      }
    }
    
  }
  return (
    <form className='flex flex-col w-full h-full p-10 text-white' onSubmit={handleSubmit}>
      <div className='pb-1 mb-1'>
        <h1 className='font-main font-bold text-[25px] text-center'>
          ValorGram
        </h1>
      </div>
      <div className='m-3'>
        <h1 className='font-main font-bold m-2 text-[35px] text-center'>
          Create a New Account
        </h1>
        <p className='text-purple-400 text-center'>
          To use ValorGram, Please Sign Up
        </p>
      </div>
      <span className={`text-red-500 ${!wrong && 'hidden'}`}>
        **  {'      '} SomeThing went wrong **
      </span>
      <div className='m-4'>

        <div className="form-outline mb-4">
          <label className="form-label">Name</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="bg-[#121212] outline-none border-none w-full p-2 rounded-xl" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">User Name</label>
          <input type="text"
            value={userName} onChange={(event) => setUserName(event.target.value)}
            className="bg-[#121212] outline-none border-none w-full p-2 rounded-xl" />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Email address</label>
          <input
            value={email} onChange={(event) => setEmail(event.target.value)}
            type="email" className="bg-[#121212] outline-none border-none w-full p-2 rounded-xl" />
        </div>

        <div className="form-outline mb-1">
          <label className="form-label" >Password</label>
          <input
            value={password} onChange={(event) => setPassword(event.target.value)}
            type="password" className="bg-[#121212] outline-none border-none w-full p-2 rounded-xl" />
        </div>
        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="mt-4 btn btn-primary btn-block mb-4 w-full">Sign in</button>
        <div className='text-center'>Don't Have Account ? <span className='text-purple-800 cursor-pointer'>SignUp</span></div>
      </div>
    </form>
  )
}

export default SignUp