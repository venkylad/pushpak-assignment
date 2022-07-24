import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BiHide, BiShow } from 'react-icons/bi';

const Login = ({ handleSubmit }) => {
  const [hide, setHide] = useState(true);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <div className='text-[120px]'>
        <HiOutlineMail />
      </div>
      <div className=' border-4 rounded-2xl w-full max-w-[90%] lg:max-w-[600px] flex flex-col items-center justify-center p-5 lg:p-10'>
        <h1 className='text-3xl font-semibold underline'>Sign in</h1>
        <form
          className='flex flex-col w-[95%] lg:w-[75%]'
          onSubmit={(e) => handleSubmit(e, user)}
        >
          <label className='font-semibold text-lg leading-[40px]'>
            Email / UserName
          </label>
          <input
            type='text'
            placeholder='Enter Email ID or User Name'
            className='border-2 px-3 py-2 rounded-lg font-medium'
            value={user?.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <label className='mt-4 font-semibold text-lg leading-[40px]'>
            Password
          </label>
          <div className='relative'>
            <input
              type={hide ? 'password' : 'text'}
              placeholder='Enter Password'
              className='border-2 px-3 py-2 w-full rounded-lg font-medium'
              value={user?.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <div
              className='absolute right-3 top-[25%] text-2xl cursor-pointer'
              onClick={() => setHide(!hide)}
            >
              {hide ? <BiHide /> : <BiShow />}
            </div>
          </div>
          <button
            type='submit'
            className='bg-blue-600 mt-6 text-white font-bold text-base lg:text-lg py-1 px-2 lg:py-2 lg:px-6 rounded-lg cursor-pointer'
          >
            Sign In
          </button>
        </form>
        <p className='mt-5'>Forgot Password?</p>
        <p>
          Dont't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
