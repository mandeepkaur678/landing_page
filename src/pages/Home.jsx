function Home(){
    return (
      <>
        <div className="text-center bg-[url('./src/assets/image1.jpg')] mt-1 bg-cover h-screen">
          <div className="bg-black/40 min-h-screen flex items-center justify-center text-white">
          <section>
            <h1 className="text-center text-5xl font-bold max-w-xl mx-auto">
              Building Digital Experiences That Matter
            </h1>
            <p className="py-10 max-w-lg mx-auto ">
              We transform ideas into powerful digital solutions that help
              businesses grow and succeed in the digital world.
            </p>
            <button className="mx-10 px-8 py-1 bg-gradient-to-r from-purple-900 to-pink-700 text-white rounded-lg hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </section>
            
          </div>
        </div>
      </>
    );
}

export default Home