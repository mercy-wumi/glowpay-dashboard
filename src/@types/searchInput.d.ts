export type Props = {
    children: React.ReactNode
}

export interface ITranHistory {
        id: number,
        img: string,
        name: string,
        date: string,
        amount: string,
        transaction: string
}

export type SearchInputType = {
    showAll: boolean;
    searchHistory: string;
    transHistory: ITranHistory[];
    getFilteredTransaction: ITranHistory[];
    setShowAll: React.Dispatch<React.SetStateAction<boolean>>; 
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}