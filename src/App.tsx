import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
import ThemeContextProvider from "./context/ThemeContext"

function App() {

  return (
    <ThemeContextProvider>
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </ThemeContextProvider>
  )
}

export default App
