import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
import AuthContextProvider from "./context/AuthContext"
import ThemeContextProvider from "./context/ThemeContext"
import TransactionContextProvider from "./context/TransactionContext"

function App() {

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <TransactionContextProvider>
          <div className="flex">
            <Sidebar />
            <Dashboard />
          </div>
        </TransactionContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  )
}

export default App
