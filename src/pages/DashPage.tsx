import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ThemeContextType } from '../@types/theme'

import Dashboard from "../components/Dashboard"
import Sidebar from "../components/Sidebar"

const DashPage = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    return (
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-mainBlack'} lg:flex hidden`}>
            <div className='w-full 2xl:max-w-[1400px] 2xl:mx-auto'>
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    )
}

export default DashPage