import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <>
      <section className="relative h-[100vh] bg-white bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/PK-en-20250127-TRIFECTA-perspective_217df22c-add3-44dc-859a-686d5f6f5026_large.jpg')] bg-cover bg-center">
        <div className="absolute  bg-black w-full h-[100%] opacity-60"></div>
        <Header />
        <div className="relative bg-[#000000ab] max-w-sm mx-auto p-10 ">
          <h1 className="text-white  font-bold text-3xl"> Sign In </h1>
          <div className="pt-9">
            <div className="email">
              <input type="email" className='bg-transparent border-2 px-3 py-3 my-2 text-white rounded-lg w-full border-gray-700' placeholder='Email or mobile number' />
            </div>
            <div className="pass">
              <input type="password" className='bg-transparent border-2 px-3 py-3 my-2 text-white rounded-lg w-full border-gray-700' placeholder='Password' />
            </div>
            <button className='bg-red-600 duration-300 hover:bg-red-700  w-full text-white text-center px-3 font-bold my-2  py-2 rounded-lg '>Sign In</button>
            <p className='text-gray-400 pt-5'>New to Netflix? <span className='font-semibold text-white hover:underline cursor-pointer'>Sign up now.</span></p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Login