import { defineStore } from "pinia";

interface NumberType {
    id?: number
    number: number
}

interface Numbers {
    content: NumberType[]
    totalElements: number
    size: number
}

export const useNumberStore = defineStore("numberStore", {
    state: () => ({
        numbers: {} as Numbers,
        isLoading: false
    }),
    actions: {
        async getNumbers(pageNumber: number = 1) {
            const res = await fetch(`${import.meta.env.VITE_API_PATH}/numbers?pageNumber=${pageNumber}`)
            this.numbers = await res.json()

            this.isLoading = false
        },
        async addNumber(number: NumberType) {
            await fetch(`${import.meta.env.VITE_API_PATH}/numbers`, {
                method: "POST",
                body: JSON.stringify(number),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
})