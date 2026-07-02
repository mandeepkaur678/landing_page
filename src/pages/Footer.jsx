import React from 'react'

const footer = () => {
  return (
    <>
      <footer className="text-white bg-gradient-to-r from-purple-900 to-pink-700 ">
        <div className="text-center">
          <h2 className="text-bold  text-3xl ">Tekup</h2>
          <p>Innovating for a better tomorrow.</p>
        </div>
       
          <div className="flex justify-around m-4 p-6">
            <div className="px-10 ">
              <h2 className="font-bold m-3">Quick Links</h2>
              <ul className="text-center">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#Services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="px-10 text-center">
              <h2 className="font-bold m-3 ">Contact Us</h2>
              <p>
                <strong>Email: </strong>hello@example.com
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Address:</strong> 123 Business Street
                <br /> Ludhiana, Punjab <br />
                India
              </p>
            </div>

            <div className="flex flex-col px-10 text-center ">
              <h2 className="font-bold m-3 ">Social Media</h2>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
            </div>
          </div>
  
        <div className="text-center">
          <p className="text-bold text-2xl m-3 ">
            Subscribe to our newsletter for updates:
          </p>
          <form className="p-4 m-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="mx-3 px-10 rounded-md"
            />
            <button
              type="submit"
              className="px-6 bg-white/60 text-black rounded-md hover:bg-black/40 hover:text-white transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="text-center">
          <p>© 2026 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default footer