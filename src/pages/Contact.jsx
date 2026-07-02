import React from 'react'

const Contact = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-center text-3xl pt-16 text-pink-600">Contact Us</h1>
        <div className='flex justify-between items-start mx-20 my-16 '>
          
          <div >
            <h4 className='text-center py-2 font-bold text-pink-600'>Contact Info Section</h4>
            <div className='border-2 bg-pink-100 shadow-md shadow-pink-300 py-10 px-6 w-[500px] h-[350px] '>
              <h4 className='text-2xl font-bold text-center'>Get in Touch</h4>
              <p className='max-w-md '>
                We're here to discuss your project and bring your ideas for life
                with premium design & development
              </p>
              <div className='mt-6 border-t border-gray-950 mx-3'/>

              <p className='py-2'><strong>E-mail:</strong> hello@example.com</p>
              <p className='py-2'><strong>Address:</strong> 912 Nova street, Sector 14, Berlin</p>
              <p className='py-2'><strong>Phone:</strong> 518-564-3200</p>
            </div>
          </div>
          
          <div>
            <h2 className='text-center py-2 font-bold text-pink-600'>Contact Form</h2>
          <div className='border bg-transparent shadow-md shadow-pink-300 py-10 px-6 w-[500px] h-[350px]'> 
            <form className='max-w-lg '>
              <label htmlFor="name" className='py-2 font-bold'>Name:</label><br/>
              <input type="text" placeholder="Your Name*" name="name" className='w-full px-5 py-1 bg-transparent shadow-sm shadow-pink-300'></input><br/>
              <label htmlFor='email' className='py-2 font-bold'>E-Mail:</label><br/>
              <input type="email" placeholder="Email Address*" className='w-full px-5 py-1 bg-transparent shadow-sm shadow-pink-300'></input><br/>
               <label htmlFor='phone' className='py-2 font-bold'>Phone:</label><br/>
              <input type="tel" placeholder="Your Phone Number*" className='w-full px-5 py-1 bg-transparent shadow-sm shadow-pink-300'></input><br/>
               <label htmlFor='Message' className='py-2 font-bold'>Message</label><br/>
              <input type="text" placeholder="enter Your message*" className='w-full px-5 py-1 bg-transparent shadow-sm shadow-pink-300'></input><br/>

              <button className="mx-auto px-8 py-2 my-3 bg-gradient-to-r from-purple-900 to-pink-700 text-white rounded-lg hover:scale-105 transition-all duration-300 ">Send Message</button>
            </form>
          </div>
           
          </div>
        </div>
        

      </div>
    </>
  );
};

export default Contact;