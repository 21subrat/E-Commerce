import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
        <Navbar />
        <hr className='border-gray-300' />
        <div className='flex w-full'>
        <Sidebar />
        <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>

        </div>
        </div>
      </>
    </div>
  )
}

export default App
