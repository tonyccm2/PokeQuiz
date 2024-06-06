import { useSetAtom } from "jotai"
import { useQuestionsStore } from "../store/Questions"
import { startAtom } from "../atoms/start.atom"

export const Restart = () => {
    const setQuestions = useQuestionsStore((state) => state.setQuestions)
    const setCurrentQuestion = useQuestionsStore((state) => state.setCurrentQuestion)
    const setStart = useSetAtom(startAtom)
    const handleClick = () => {
        setQuestions([])
        setCurrentQuestion(0)
        setStart(false)
    }
    return (
        <>
            <div className="flex justify-center pt-4">
                <button
                    onClick={handleClick}
                    className="bg-transparent hover:bg-gray-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-full disabled:bg-gray-500 disabled:text-white"
                >
                    Volver a empezar
                </button>
            </div>
        </>
    )
}
