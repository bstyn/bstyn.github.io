import './css/homepage.css'

function Homepage(){

    return(
        <div id="homepage" className="relative overflow-hidden transition-colors duration-500 h-screen shadow-xl dark:shadow-none rounded-2xl bg-white dark:bg-[#36393F] mt-20 mx-10 p-5">
            <div className="homepage transition-all duration-500 w-full h-full top-0 left-0 dark:brightness-50 dark:contrast-[3] dark:blur-[2px] dark:grayscale-[75%] dark:saturate-[70%] absolute z-[0]"></div>
            <div className='relative z-[12]'>
                <p className="z-[12] dark:text-gray-300">Homepage</p>
            </div>
        </div>
    )
}

export default Homepage;