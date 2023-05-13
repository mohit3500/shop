import React from 'react'

const Discount = () => {
  return (
    <div className="w-screen h-auto px-14 mb-20 ">
        <div className="mt-5 text-[20px] font-semibold mb-10">
        Choose By Brand
      </div>
      <div className='grid grid-cols-4 gap-7'>
        <div className='overflow-hidden rounded-xl h-[55vh] relative cursor-pointer bg-[#f6f2d3] shadow-lg '>
            <h1 className='text-[20px] font-medium px-6 pt-5'>Save</h1>
            <p className='text-[23px] font-medium text-[#cc990f] px-6'>$ <span className='text-[40px] font-semibold'>100</span></p>
            <p className='pt-3 text-[15px] px-6'>Explore Our Furniture & Home Furnishing Range</p>
            <img src='https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?size=626&ext=jpg&ga=GA1.2.1846942561.1682527688&semt=robertav1_2_sidr' alt="" className='h-[175px] w-full object-cover absolute bottom-0 hover:scale-[1.05] duration-500 transition-all ease'/>
        </div>
        <div className='overflow-hidden rounded-xl h-[55vh] relative cursor-pointer bg-[#f9dcdc] shadow-lg'>
            <h1 className='text-[20px] font-medium px-6 pt-5'>Save</h1>
            <p className='text-[23px] font-medium text-[#961f20] px-6'>$ <span className='text-[40px] font-semibold'>100</span></p>            <p className='pt-3 text-[15px] px-6'>Enjoy Discount all types of Books & Gadgets item</p>
            <img src='https://img.freepik.com/premium-photo/top-view-notebooks-pink-desktop_390739-595.jpg?size=626&ext=jpg&ga=GA1.2.1846942561.1682527688&semt=robertav1_2_sidr' alt="" className='h-[175px] w-full object-cover absolute bottom-0 hover:scale-[1.05] duration-500 transition-all ease' />
        </div>
        <div className='overflow-hidden rounded-xl h-[55vh] relative cursor-pointer bg-[#f3e4da] shadow-lg'>
            <h1 className='text-[20px] font-medium px-6 pt-5'>Save</h1>
            <p className='text-[23px] font-medium text-[#94643d] px-6'>$ <span className='text-[40px] font-semibold'>100</span></p>            <p className='pt-3 text-[15px] px-6'>Explore Our all types Dresses for men</p>
            <img src='https://img.freepik.com/free-photo/spring-wardrobe-switch-flat-lay_23-2150264150.jpg?size=626&ext=jpg&ga=GA1.2.1846942561.1682527688&semt=robertav1_2_sidr' alt="" className='h-[175px] w-full object-cover absolute bottom-0 hover:scale-[1.05] duration-500 transition-all ease'/>
        </div>
        <div className='overflow-hidden rounded-xl h-[55vh] relative cursor-pointer bg-[#d2f7ed] shadow-lg'>
            <h1 className='text-[20px] font-medium px-6 pt-5'>Save</h1>
            <p className='text-[23px] font-medium text-[#073629] px-6'>$ <span className='text-[40px] font-semibold'>100</span></p>            <p className='pt-3 text-[15px] px-6'>Enjoy Discount all types of Educational accessories</p>
            <img src='https://img.freepik.com/free-photo/still-life-aesthetic-earrings_23-2149649114.jpg?size=626&ext=jpg&ga=GA1.1.1846942561.1682527688&semt=robertav1_2_sidr' alt="" className='h-[175px] w-full object-cover absolute bottom-0 hover:scale-[1.05] duration-500 transition-all ease'/>
        </div>
      </div>
    </div>
  )
}

export default Discount
