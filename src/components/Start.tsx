import { useEffect } from "react"
import { useGetAllQuestions } from "../backendState/questions.zustand"
import { useQuestionsStore } from "../store/Questions"
import { Difficulity } from "./Difficulity"
import { useAtom, useAtomValue } from "jotai"
import { difficulityAtom } from "../atoms/difficulity.atom"
import { startAtom } from "../atoms/start.atom"

export const Start = () => {
    const difficulity = useAtomValue(difficulityAtom)
    const [start, setStart] = useAtom(startAtom)
    const setQuestions = useQuestionsStore(state => state.setQuestions)
    const { data, isLoading, refetch, isSuccess } = useGetAllQuestions(difficulity)
    const handleClick = () => {
        setStart(true)
        refetch()
    }
    useEffect(() => {
        if (start && isSuccess) setQuestions(data)
    }, [isSuccess, data, setQuestions, start])
    return (
        <>
            <div className="flex justify-center pb-8">
                <Difficulity />
            </div>
            <div className="flex justify-center">
                <button
                    disabled={isLoading}
                    onClick={handleClick}
                    className="w-full bg-transparent hover:bg-gray-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-full disabled:bg-gray-500 disabled:text-white"
                >
                    Empezar
                </button>
            </div>
        </>
    )
}
