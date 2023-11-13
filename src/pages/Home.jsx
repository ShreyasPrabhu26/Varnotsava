import React from 'react'
import bgConcert from "/videos/bgConcert.mp4"


const Home = () => {
    return (<>
        <main className="bg-white border-gray-200 dark:bg-gray-900 flex justify-center items-center h-screen flex-col ">
            {/* BG-VIDEO */}
            <div className="video-container w-screen h-screen relative">
                <video src={bgConcert} autoPlay loop muted className="w-full h-full object-cover" />
                <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-70 z-100"></div>
                {/* Hero-Content */}
                <div className=" absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start z-20">

                    <div className="hero-text  font-inter text-center container  h-screen w-full flex flex-col items-center justify-evenly  md:gap-5">

                        <h1 className=" text-blue-400  text-5xl mt-16  text-center md:mt-28">NAMASTHE</h1>
                        <h2 className=" text-blue-400  text-4xl mb-2">
                            WELCOME TO <span className="animate-word">VARNOTHSAVA</span> 2K24
                        </h2>

                        <div className="container md:w-3/4">
                            <p className=' p-5 text-center text-lg text-white  hidden md:block md:mb-[-20px]'>Since 2014, "Varnothsava" has been the SMVITM's flagship intercollegiate techno-cultural fest, with the tenth edition taking place on March 23rd to 26th, 2024.</p>

                            <p className=' p-5 text-center text-lg text-white mb-5'>Varnothsava certainly inspires hidden talents and blends it all into a dynamic mix of varied hues, with technical events testing and challenging the technical enthusiasts and cultural events luring in all the art lovers.</p>
                        </div>

                        <button type="button" className="mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>

                    </div>
                </div>

            </div>
        </main>
    </>
    )
}

export default Home