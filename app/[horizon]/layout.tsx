import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md-flex-col md:f ixed md:inset- y-16 md:w-72 z-50 bg-neutral-400 dark:bg-neutral-800'>
        <Sidebar />
        <main className='md:pl-72'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout