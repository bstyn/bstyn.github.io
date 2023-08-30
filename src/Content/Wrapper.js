import About from './About';
import Homepage from './Homepage';

function Wrapper(){

    return(
        <div className="flex flex-col gap-10 bg-gray-50 dark:bg-[#202225]">
            <Homepage />
            <About/>
        </div>
    )
}

export default Wrapper;