import React from 'react'

const ErrorPage = () => {
  return (
    <div className=' h-screen flex items-center justify-center '>
        <div className='p-4 w-full max-w-md    min-h-96'>
            <h1 className='text-xl font-bold text-center text-red-700'>OOPS! This page Does not exists</h1>
           <h2  className='text-center py-4'>Go to <span className='text-primary font-bold underline'><a href='/'>Home</a></span></h2>
        </div>
    </div>
  )
}

export default ErrorPage