import { useState } from 'react';
import Header from './Header';
const Login = ()=>{

    const [isSignin, setIsSignin] = useState(true)


    const toggleSignin = ()=>{
        setIsSignin(!isSignin)
    }

return(
    <div>
       <Header />
       <div className='absolute'>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg
" alt ="logo"/>
       </div>
       <form className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 text-white'>{isSignin ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignin && (
        <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700 text-white'></input>
        )}
        <input type='text' placeholder='Email or Phone number' className='p-2 my-2 w-full bg-gray-700 text-white'></input>
        <input type='password' placeholder='password' className='p-2 my-2 w-full bg-gray-700 text-white'></input>
   
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg text-white'>{isSignin ? 'Sign In' : 'Sign Up'}</button>
        <p onClick={toggleSignin} className='text-white cursor-pointer'>{isSignin ? 'New to Netflix? Sign Up now' : 'Already a member? Sign In now '}</p>
       </form>
    </div>
)
}
export default Login