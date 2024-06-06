
import { useQuestionsStore } from "../store/Questions"
import { Question } from "./Question"

export const QuestionsList = () => {
    const questions = useQuestionsStore(state => state.questions)
    const length = useQuestionsStore(state => state.length)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
    const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)
    const questionInfo = questions[currentQuestion]
    return (
        <>
            <div className="max-w-sm rounded-lg shadow-lg bg-gray-700 overflow-hidden">
                <div className="px-6 py-4">
                    <div className="pb-4">
                        <Question questionInfo={questionInfo} />
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <button
                            onClick={() => goPreviousQuestion()}
                            disabled={currentQuestion === 0}
                            className={`bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full ${currentQuestion === 0 && 'opacity-50 cursor-not-allowed'}`}
                        >
                            anterior
                        </button>
                        <p>{currentQuestion + 1}/{length}</p>
                        <button
                            onClick={() => goNextQuestion()}
                            disabled={currentQuestion + 1 === length}
                            className={`bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full ${currentQuestion + 1 === length && 'opacity-50 cursor-not-allowed'}`}
                        >
                            siguiente
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
