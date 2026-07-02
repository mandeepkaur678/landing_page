import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-pink-50">
        <div className="flex justify-between">
          <div className="py-28">
            <p className="px-10 py-2 text-pink-600 font-bold">ABOUT US</p>
            <h1 className="text-3xl font-bold max-w-lg px-10 font-serif">
              Building Digital Experiences That Matter
            </h1>
            <p className="px-10 py-10 max-w-md text-black">
              We transform ideas into powerful digital solutions that help
              businesses grow and succeed
            </p>
            <button className="mx-10 px-8 py-3 bg-gradient-to-r from-purple-900 to-pink-700 text-white rounded-lg hover:scale-105 transition-all duration-300">
              Get in Touch
            </button>
          </div>
          <img
            src="./src/assets/about.jpg"
            alt="about picture"
            className="h-72 w-auto my-28 mx-28 rounded-lg shadow-lg shadow-pink-700"
          />
        </div>
        <div className="mt-6 border-t border-pink-900 mx-3" />

        <div className="flex justify-between py-5">
          <img
            src="./src/assets/aboutus.jpg"
            className="h-1/2 w-1/2 my-20 mx-10 border rounded-lg shadow-lg shadow-black"
          />
          <div className="py-20">
            <p className="px-5 py-2 text-pink-600 font-bold">OUR STORY</p>
            <h2 className="text-3xl font-bold max-w-lg px-5 font-serif">
              Turning ideas into impactful digital solutions
            </h2>
            <div className="px-5 py-5 text-md text-black">
              <p>
                Tekup was founded with a simple mission-to help businesses
                navigate the digital world with innovation, scalable and
                user-focused solutions.
              </p>

              <p className="py-2">
                since our inception, we've partnered with startups,
                enterpreneurs, and enterprises to create stunning websites,
                powerful applications, and memorable brand experiences.
              </p>

              <p>
                Our team of pasasionate designers, developers, and strategies
                work closely with clients to understand their goals and deliver
                solutions that drive real results.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-pink-900 mx-3" />

        <div>
          <h4 className="font-bold text-center py-5 text-pink-600">
            WHY CHOOSE US
          </h4>
          <div className="flex justify-around gap-5 mx-4 my-10">
            <section className="border-2 border-purple-200 shadow-purple-400 bg-white shadow-md rounded-xl p-5">
              <img
                src="./src/assets/rocket.jpg"
                alt="innovation"
                className="h-12 w-auto"
              />
              <h4 className="font-bold text-lg py-5 ">Innovation</h4>
              <p className="py-2 max-w-md">
                We embrace the latest technologies and creative ideas to build
                future-ready solutions.
              </p>
            </section>

            <section className="border-2  border-pink-200 shadow-pink-400 bg-white shadow-md rounded-xl p-5">
              <img
                src="./src/assets/creative.png"
                alt="creative"
                className="h-12 w-auto"
              />
              <h4 className="font-bold text-lg py-5">Creative Solutions</h4>
              <p className="py-4 max-w-md">
                Every project is unique.We craft customized solutions that
                reflect your brand and vision.
              </p>
            </section>

            <section className="border-2  border-orange-200 shadow-orange-400 bg-white shadow-md rounded-xl p-5">
              <img
                src="./src/assets/handshake.jpg"
                alt="Partnership"
                className="h-12 w-auto"
              />
              <h4 className="font-bold text-lg py-5">Trusted Partnership</h4>
              <p className="py-4 max-w-md">
                We believe in long-term relationships built on trust,
                transparency, and mutual growth.
              </p>
            </section>

            <section className="border-2  border-blue-200 shadow-blue-400 bg-white shadow-md rounded-xl p-5">
              <img
                src="./src/assets/fastdelivery.png"
                alt="creative"
                className="h-12 w-auto"
              />
              <h4 className="font-bold text-lg py-5">Fast Delivery</h4>
              <p className="py-4 max-w-md">
                We follow agile processes to deliver high-quality solutions on
                time, every time.
              </p>
            </section>
          </div>
        </div>

       

        <div>
          <h3 className="font-bold text-center text-pink-600 py-5">
            OUR VLAUES
          </h3>

          <div className="flex justify-between py-10">
            <section className="border-2 mx-10  border-purple-200 shadow-purple-400 bg-white shadow-md rounded-xl p-5 flex justify-between align-middle ">
              <img
                src="./src/assets/customer.jpg"
                alt="customer"
                className="h-24 w-auto py-3"
              />
              <div className="px-7">
                <h4 className="font-bold text-purple-800 py-3">
                  Customer First
                </h4>
                <p className="max-w-lg">
                  We put our clients the heart of everything we do and build
                  solutions that create real value.
                </p>
              </div>
            </section>

            <section className="border-2 mx-10  border-pink-200 shadow-pink-400 bg-white shadow-md rounded-xl p-5 flex justify-between align-middle ">
              <img
                src="./src/assets/quality.jpg"
                alt="customer"
                className="h-24 w-auto py-3"
              />
              <div className="px-7">
                <h4 className="font-bold text-pink-800 py-3">
                  Quality & Excellence
                </h4>
                <p className="max-w-lg">
                  We are committed to delivering high-quality work with
                  attention to every detail.
                </p>
              </div>
            </section>

            <section className="border-2 mx-10 border-blue-200 shadow-blue-400 bg-white shadow-md rounded-xl p-5 flex justify-between align-middle ">
              <img
                src="./src/assets/rocket.png"
                alt="customer"
                className="h-20 w-auto py-3"
              />
              <div className="px-7">
                <h4 className="font-bold text-blue-800 py-3">
                  Continuous Innovation
                </h4>
                <p className="max-w-lg">
                  We constantly explore new ideas and technologies to deliver
                  better solutions.
                </p>
              </div>
            </section>
          </div>
        </div>

        <section className="bg-gradient-to-r from-purple-900 to-pink-700 text-white px-10 mx-72 py-10 mt-20 rounded-xl">
          <div className="flex justify-between">
          <div >
          <h4 className="font-bold py-2 text-2xl">Ready to build your next project?</h4>
          <p className="text-md py-1">Let's create something amazing together</p>
          </div>
          <button className="mx-10 px-8 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:scale-105 transition-all duration-300">Start your Project</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
