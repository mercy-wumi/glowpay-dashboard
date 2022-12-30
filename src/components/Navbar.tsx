import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Theme, ThemeContextType } from '../@types/theme'

import search from '../assets/images/search-normal.png'
import searchDark from '../assets/images/searchDark.png'
import sun from '../assets/images/sun.png'
import moon from '../assets/images/vector.png'
import moonDark from '../assets/images/moon.png'
import arrowDown from '../assets/images/arrowDown.png'
import dropDown from '../assets/images/dropDown.png'
import profile from '../assets/images/profile.png'
import notification from '../assets/images/notification.png'
import notificationDark from '../assets/images/notificationDark.png'

const Navbar = () => {
    const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;

    const handleThemeChange = (themeCol: String) => {
        changeTheme(themeCol as Theme);
    }

    return (
        <nav>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Dashboard</h1>
                <div className={`${theme === 'light' ? 'bg-white' : 'darkModeSearch'} rounded-lg p-2 flex items-center flex-1 mx-36`}>
                    <img src={theme === 'light' ? search : searchDark} alt="search icon" className='mr-2' />
                    <input type='text' placeholder='Search' className='bg-inherit w-full outline-none' />
                </div>
                <div className='flex items-center'>
                    <div className={`${theme === 'light' ? 'bg-gray' : 'bg-darkNav'} flex rounded-full items-center mr-8`}>
                        <img src={sun} alt="light mode" onClick={() => handleThemeChange('light')} className={`${theme === 'light' ? 'bg-[#B55B52] rounded-full' : ''} cursor-pointer p-1`} />
                        <img src={theme === 'light' ? moon : moonDark} alt="dark mode" onClick={() => handleThemeChange('dark')} className={`${theme === 'dark' ? 'bg-[#B55B52] rounded-full' : ''} cursor-pointer p-1`} />
                    </div>
                    <div className={`${theme === 'light' ? 'bg-gray' : 'bg-darkNav'} rounded-xl p-1 mr-8`}>
                        <img src={theme === 'light' ? notification : notificationDark} alt="notification bell" />
                    </div>
                    <div className='flex'>
                        <img src={profile} alt="profile picture" className='mr-4' />
                        <div className='flex items-center'>
                            <span className='font-semibold mr-2'>Glowree</span>
                            <img src={theme === 'light' ? arrowDown : dropDown} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar