import React from 'react'
import bgConcert from "/videos/bgConcert.mp4"


const Home = () => {
    return (<>
        <main className="bg-white border-gray-200 dark:bg-gray-900 flex justify-center items-center h-screen flex-col ">
            {/* BG-VIDEO */}
            <div className="video-container w-screen h-screen relative">
                <video src={bgConcert} autoPlay loop muted className="w-full h-full object-cover" />
                <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
                {/* Hero-Content */}
                <div className="content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
                    <h1 className="hero-text text-cyan-300 font-family-Codystar">Welcome</h1>
                </div>
            </div>
        </main>
    </>
    )
}

export default Home