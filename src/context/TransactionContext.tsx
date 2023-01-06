import React, { createContext, useState } from "react";
import { SearchInputType, ITranHistory } from '../@types/searchInput';
import { history } from '../TransactionHistoryData'

type Props = {
    children: React.ReactNode
}
export const TransactionContext = createContext<SearchInputType | null>(null)

const TransactionContextProvider: React.FC<Props> = ({ children }) => {
    const [transHistory, setTransHistory] = useState<ITranHistory[]>(history)
    const [searchHistory, setSearchHistory] = useState('')

    const getFilteredTransaction = transHistory.filter(trans => trans.transaction.toLowerCase().includes(searchHistory.toLowerCase()))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchHistory(e.target.value)
        console.log(searchHistory)
    }
    return (
        <TransactionContext.Provider value={{ transHistory, getFilteredTransaction, handleChange, searchHistory }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider