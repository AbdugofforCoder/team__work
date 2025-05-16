import React from 'react'

const signUp = () => {
  return (
    <div>
        <main>
            <div className="container">
                <div className="sign__content">
                    <div className="sign__left">
                        <img src="" alt="" />
                    </div>
                    <div className="sign__left">
                        <h1>Create an account</h1>
                        <p>Enter your details below</p>
                        <form>
                            <input className='w-full border-b border-blue-600 placeholder-gray-400 text-black text-[14px] focus:outline-none pb-2' type="text" placeholder='Name' />
                            <input className='w-full border-b border-blue-600 placeholder-gray-400 text-black text-[14px] focus:outline-none pb-2' type="text" placeholder='Email or Phone Number' />
                            <input className='w-full border-b border-blue-600 placeholder-gray-400 text-black text-[14px] focus:outline-none pb-2' type="text" placeholder='Password' />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default signUp