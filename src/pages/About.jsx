function About(){
    return(<>
    <h1 className="font-bold text-3xl text-center text-blue-900">Why Choose Us</h1>
        <div className="flex justify-around text-center">
    
            <div className=" text-blue-900 text-lg text-left ">           
                    <ul className="text-left p-4 my-16 list-disc text-bold">
                         <li>Innovative solutions for modern businesses</li>
                         <li>Mission: simplify challenges with technology</li>
                         <li>Vision: a future of efficiency & sustainability</li>
                         <li>Values: integrity, customer focus, innovation</li>
                         <li>Global reach with scalable impact</li>
            
                    </ul>

            </div>
            <div className="border border-none rounded-md my-11 ">
                <img src="./src/assets/about.jpg" alt="about picture" className="h-64 w-auto" />
            </div>
            
        </div>
        
    </>)
}

export default About