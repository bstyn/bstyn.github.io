import Switcher from "../Components/Switcher";
function Navbar(){
    return(
        <nav className="navBar fixed top-0 left-0 right-0 overflow-hidden items-center border-b dark:border-none border-gray-100 h-[50px] dark:bg-[#292b2f] bg-white dark:text-white flex justify-between">
            <ul className="contentList dark:text-gray-300 p-3 flex justify-start gap-5">
                <li><a href="#homepage">Home</a></li>
                <li><a href="/">News</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="flex  h-[75%] justify-center items-center px-4 mr-2 dark:bg-[#36393F] bg-gray-100 rounded-[50px]">
                <Switcher />
            </div>
        </nav>
    )
}

export default Navbar;