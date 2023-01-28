import React from 'react'
import Laptop from '../assets/laptop.avif'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img 
                className='w-[500px] mx-auto my-4'
                src={Laptop} 
                alt='/' />
            <div className='flex flex-col justify-center'>
                <p className=' text-[#00df9a] font-bold'>Data Analytics DashBoard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Manage Data Analytics Centrally
                </h1>
                <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quia reprehenderit sit exercitationem a labore, 
                    blanditiis maiores eaque facere nobis aperiam ducimus culpa officia obcaecati eius vitae sapiente! 
                    Officiis, necessitatibus rem!
                </p>
                <button className='rounded-full text-[#00df9a] w-[200px] font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>
            </div>

        </div>

    </div>
  )
}

export default Analytics