import { create } from "zustand"
import { IQuestion } from "../types/question"
import confetti from 'canvas-confetti'
import { persist } from "zustand/middleware"

interface State {
    questions: IQuestion[]
    currentQuestion: number
    length: number
    setQuestions: (questions: IQuestion[]) => void,
    goNextQuestion: () => void,
    goPreviousQuestion: () => void,
    setCurrentQuestion: (index: number) => void,
    selectAnswer: (questionId: number, answerIndex: number) => void
}

export const useQuestionsStore = create<State>()(persist((set, get) => {
    return {
        questions: [],
        currentQuestion: 0,
        length: 0,
        setQuestions: (questions: IQuestion[]) => set({ questions: questions, length: questions.length }),
        setCurrentQuestion: (index: number) => set({ currentQuestion: index }),
        goNextQuestion: () => {
            const { currentQuestion, questions } = get()
            if (currentQuestion + 1 < questions.length)
                set((state) => {
                    return { currentQuestion: state.currentQuestion + 1 }
                })
        },
        goPreviousQuestion: () => {
            const { currentQuestion } = get()
            if (currentQuestion > 0)
                set((state) => {
                    return { currentQuestion: state.currentQuestion - 1 }
                })

        },
        selectAnswer: (questionId: number, answerIndex: number) => {
            set((state) => {
                const questions = state.questions.map((question) => {
                    if (question.id === questionId) {
                        if (question.correctAnswer === answerIndex) confetti()
                        return {
                            ...question,
                            userSelectedAnswer: answerIndex,
                            isCorrectAnswer: question.correctAnswer === answerIndex,
                        }
                    }
                    return question
                })
                return { questions }
            })
        }
    }
}, {
    name: 'questions'
}))