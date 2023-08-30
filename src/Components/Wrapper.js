import About from '../Content/About';
import Contact from '../Content/Contact';
import Homepage from '../Content/Homepage';

function Wrapper(){

    return(
        <div className="flex flex-col min-w-full transition-colors duration-500 gap-10 bg-gray-50 dark:bg-[#202225]">
            <Homepage />
            <About/>
            <Contact/>
        </div>
    )
}

export default Wrapper;