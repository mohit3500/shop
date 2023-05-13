import React from 'react';
import Logo from '../img/964261.png';

const Footer = () => {
  return (
    <div className="flex mb-7">
      <div className="flex-[0.35]">
        <div className="flex flex-col  px-7 pl-16  gap-5">
          <div className="flex gap-1 items-center">
            <img src={Logo} alt="" className="h-[40px] w-[40px]" />
            <p className="text-[17px] font-semibold text-yellow-600">
              ShopCart
            </p>
          </div>
          <p className="text-[13px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            aperiam accusantium esse ad labore veniam deleniti nostrum
            consectetur rerum dignissimos.
          </p>
          <div className="py-2 text-[15px] font-semibold">
            Accepted Payments
            <div className="grid grid-cols-4">
              <img
                className="h-[25px] w-[50px] m-2 rounded-md shadow-md"
                src="https://th.bing.com/th/id/OIP.9UpHj1fKIG5h_nBipwFV3wHaDh?pid=ImgDet&rs=1"
                alt=""
              />
              <img
                className="h-[25px] w-[50px] m-2 rounded-md shadow-md"
                src="https://th.bing.com/th?id=OIP.xVREsbEnxpFwYsgl4hNO7QHaDA&w=350&h=142&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                alt=""
              />
              <img
                className="h-[25px] w-[50px] m-2 rounded-md shadow-md"
                src="https://th.bing.com/th?id=OIP.-2DDFcENPqJSZi4wjnM5jAHaFw&w=283&h=220&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                alt=""
              />
              <img
                className="h-[25px] w-[50px] m-2 rounded-md shadow-md"
                src="https://th.bing.com/th?id=OIP.5HnGtMZ_l09860YF8XMy2QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                alt=""
              />
              <img
                className="h-[25px] w-[50px] m-2 rounded-md shadow-md"
                src="https://www.bing.com/th?id=OIP.ONya8INwfnjsgWYq6CoLpgHaEA&w=154&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                alt=""
              />
              <img
                className="h-[25px] w-[50px] m-2 rounded-md shadow-md"
                src="https://th.bing.com/th?id=OIP.wBKSzdf1HTUgx1Ax_EecKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                alt=""
              />
              <img
                className="h-[25px] w-[50px] m-2 rounded-md shadow-md"
                src="https://www.bing.com/th?id=OIP.DrBBQZ8lHIkdBSr1EVT-VQHaFW&w=133&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                alt=""
              />
              <img
                className="h-[25px] w-[50px] m-2 rounded-md shadow-md"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAFIAdQMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABQQDAQIG/9oACAEBAAAAAP0wAAAAOUfhrsMGXVvBF60OelHsR6HPS+82SnMw6bMb3lt+eChg817JflePYQ9uHRxtcI3Lvb6TKaV8fe+ZZPPQCXv6+gAAAAAAH//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/aAAoCAhADEAAAAAAAx7JjXkADjn1cKWx0AK5qW3AAAAAAA//EADAQAAIBAwEGAwYHAAAAAAAAAAECAwAEERIFEBMhMVEVU3EUIDRBcpIiMEBDUGGh/9oACAEBAAE/AP10syQoXc1Lf3D8lbQvYV7Vcee/3VBfzAhHy4O+8vHtpEUIDlM14pL5Aq3v45iEYaG9++1vIW6qtWlkrKJJRnPRaMEJGDGuPSorSKF2dRzO/aXxdt9KbtpxIojlXkxODSzosEUkrhcoKF/aeZ/lcRAmvUNGM5qOWOUExuGA3G9tR+8tGhV/I6SIFcgFK483mv8AdVpLK1wgLsRg7tpnTcwHsgrxU+QKxc7RkBYaYxVzZJK6OZSqKACKMGzWGkMgPcNVjmO5mtnOUIarTNrevA3zq7l4Nu7fM8h6mrKyjkh4knVjV0zRuUFWlyrqEY4cUVVubKDV7LFgRxhf7IrZ6ZlZ+wxu2l8Xb/Su+YPd3xhLYRSa8NtcYw33VZBVvyqnIAcA1tKIjhzp1BwaupReSW0UfzAJ9TSqFUKOgGBVxAs6YPIjoalgliP4kPqOYrWSMaj6ZqG2mmIwuF7mooliQIo5DdewTS3ELomVULvurWYT+0QdaLbTnHDKaAepxira0lguy2k8MAgNVwEMEofpoNbLh5vMfpX3NI7D8racpwkKc2aoIhDCkfYfx/8A/8QAIREAAgEDAwUAAAAAAAAAAAAAAQISAAMRBBMgITAyQFH/2gAIAQIBAT8A7E9w4Q0EYHy56W21ucqtODFIVfxPp85FQaCkEHPr/wD/xAAeEQADAAEEAwAAAAAAAAAAAAABAgMAERIgITBAUf/aAAgBAwEBPwDwIspzDv2TjWi6nWfOlkZgox1PZ3ZPXbyeYbBH63r/AP/Z"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[0.65] grid grid-cols-4">
        <div className="">
          <h1 className='text-[17px] font-semibold pb-2'>Department</h1>
          <p className='text-[13px] py-1 '>Fashion</p>
          <p className='text-[13px] py-1 '>Education Product</p>
          <p className='text-[13px] py-1 '>Frozen Food</p>
          <p className='text-[13px] py-1 '>Breverges</p>
          <p className='text-[13px] py-1 '>Organic Grocery</p>
          <p className='text-[13px] py-1 '>Office Supplies</p>
          <p className='text-[13px] py-1 '>Beauty Products</p>
          <p className='text-[13px] py-1 '>Books</p>
          <p className='text-[13px] py-1 '>Electronics & Gadgets</p>
          <p className='text-[13px] py-1 '>Travel Accessories</p>
          <p className='text-[13px] py-1 '>Fitness</p>
          <p className='text-[13px] py-1 '>Sneakers</p>
          <p className='text-[13px] py-1 '>Toys</p>
          <p className='text-[13px] py-1 '>Furniture</p>
        </div>
        <div className=''>
          <h1 className='text-[17px] font-semibold pb-2'>About Us</h1>
          <p className='text-[13px] py-1 '>About ShopCart</p>
          <p className='text-[13px] py-1 '>Careers</p>
          <p className='text-[13px] py-1 '>News & Blog</p>
          <p className='text-[13px] py-1 '>Help</p>
          <p className='text-[13px] py-1 '>Press Center</p>
          <p className='text-[13px] py-1 '>Shop by location</p>
          <p className='text-[13px] py-1 '>ShopCart & Parnters</p>
          <p className='text-[13px] py-1 '>Affliate & Partners</p>
          <p className='text-[13px] py-1 '>Ideas & Guides</p>
        </div>
        <div className=''>
          <h1 className='text-[17px] font-semibold pb-2'>Services</h1>
          <p className='text-[13px] py-1 '>Gift Card</p>
          <p className='text-[13px] py-1 '>Mobile App</p>
          <p className='text-[13px] py-1 '>Shipping & Delivery</p>
          <p className='text-[13px] py-1 '>Order Pickup</p>
          <p className='text-[13px] py-1 '>Account Signup</p>
        </div>
        <div className=''>
          <h1 className='text-[17px] font-semibold pb-2'>Help</h1>
          <p className='text-[13px] py-1 '>ShopCart Help</p>
          <p className='text-[13px] py-1 '>Returns</p>
          <p className='text-[13px] py-1 '>Track Orders</p>
          <p className='text-[13px] py-1 '>Contact us</p>
          <p className='text-[13px] py-1 '>Feedback</p>
          <p className='text-[13px] py-1 '>Security & Fraud</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
