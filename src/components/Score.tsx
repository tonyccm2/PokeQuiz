import { useQuestionsStore } from "../store/Questions"

export const Score = () => {
    const questions = useQuestionsStore(state => state.questions)
    let correct = 0
    let incorrect = 0
    let unanswer = 0
    questions.forEach((question) => {
        const { isCorrectAnswer, userSelectedAnswer } = question
        if (userSelectedAnswer === undefined) unanswer++
        else if (isCorrectAnswer) correct++
        else incorrect++
    })
    return (
        <>
            <div className='text-center pb-4 font-semibold'>
                <p>{correct} ✅ Correctas</p>
                <p>{incorrect} ❌ Incorrectas</p>
                <p>{unanswer} 🤔 Sin responder</p>
            </div>
        </>
    )
}
