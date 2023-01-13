import React, { createContext, useState } from "react";
import { SearchInputType, ITranHistory, Props } from '../@types/searchInput';
import { history } from '../TransactionHistoryData'

export const TransactionContext = createContext<SearchInputType | null>(null)

const TransactionContextProvider: React.FC<Props> = ({ children }) => {
    const [transHistory, setTransHistory] = useState<ITranHistory[]>(history)
    const [searchHistory, setSearchHistory] = useState('')
    const [showAll, setShowAll] = useState(false)

    const getFilteredTransaction = transHistory.filter(trans => trans.transaction.toLowerCase().includes(searchHistory.toLowerCase()))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchHistory(e.target.value)
        console.log(searchHistory)
    }

    return (
        <TransactionContext.Provider value={{
            showAll, setShowAll, transHistory, getFilteredTransaction, handleChange, searchHistory
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider