import { useQuestionsStore } from '../store/Questions';
import { IQuestion } from '../types/question';

const getBgColor = (questionInfo: IQuestion, index: number) => {
    const { userSelectedAnswer, correctAnswer } = questionInfo
    if (index === correctAnswer && userSelectedAnswer !== undefined) return 'bg-green-500'
    if (index !== userSelectedAnswer) return 'bg-[#242424]'
    if (index !== correctAnswer) return 'bg-red-500'
}

export const Question = ({ questionInfo }: { questionInfo: IQuestion }) => {
    const selectAnswer = useQuestionsStore(state => state.selectAnswer)
    const { answers, question, id, userSelectedAnswer } = questionInfo
    const handleClick = (answerIndex: number) => () => {
        selectAnswer(id, answerIndex)
    }
    return (
        <>
            <h3 className="pb-4 text-center text-xl font-semibold">{question}</h3>
            <ul>
                {
                    answers?.map((answer, index) => (
                        <li key={index} className="bg-[#242424] border-b border-gray-700 p-0.5">
                            <button
                                disabled={userSelectedAnswer !== undefined}
                                onClick={handleClick(index)}
                                className={`w-full hover:bg-gray-700 p-1 text-md font-semibold text-gray-300 ${userSelectedAnswer !== undefined && 'opacity-50 cursor-not-allowed'} ${getBgColor(questionInfo, index)}`}
                            >
                                {answer}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
