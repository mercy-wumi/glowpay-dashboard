import { ThemeContext } from "../context/ThemeContext"
import { ThemeContextType } from "../@types/theme"
import { useContext } from "react"

const ExtraMenu = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType
    const style = {
        menu: `${theme === 'light' ? 'hover:bg-lightIcon' : 'hover:bg-darkIcon hover:text-brightRed'} cursor-pointer p-2 rounded-xl`
    }
    return (
        <div className={`${theme === 'light' ? 'bg-gray' : 'bg-darkNav'} w-[150px] z-50 fixed right-0 mt-2 rounded-xl p-2`}>
            <ul className=''>
                <li className={style.menu}>Profile</li>
                <li className={style.menu}>Logout</li>
            </ul>
        </div>
    )
}

export default ExtraMenu