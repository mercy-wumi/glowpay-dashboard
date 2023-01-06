export interface ITranHistory {
        id: number,
        img: string,
        name: string,
        date: string,
        amount: string,
        transaction: string
}

export type SearchInputType = {
    searchHistory: string;
    transHistory: ITranHistory[];
    getFilteredTransaction: ITranHistory[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}