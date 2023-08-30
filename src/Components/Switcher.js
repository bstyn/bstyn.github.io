import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../Hooks/useDarkMode";
 
export default function Switcher() {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        <>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={20}
            />
        </>
    );
}