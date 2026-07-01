function Home(){
    return(<>
    <div className="bg-[url('./src/assets/image1.jpg')] bg-cover bg-center h-screen">
          <div className="bg-black/60 h-screen">
            <div className="relative z-10 flex flex-col h-full items-center justify-center">
              <h1 className="text-5xl font-bold text-white text-center">
                Optimize your enterprise with <br/> our leading guidance
              </h1>
              <p className="text-lg text-white text-center max-w-3xl w-2/3 mt-6 mx-auto">
                We are architects of innovation, trailblazers of technological
                advancement, and partners in your success. As a dynamic and
                forward-thinking
              </p>
              <button className="bg-black text-white py-3 px-8 m-3 rounded-lg hover:scale-105 hover:bg-black/60 transition duration-300">Start a Project</button>
            </div>
          </div>
        </div>
   
   
    
    </>)
}

export default Home