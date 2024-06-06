export interface IQuestion {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: number;
    userSelectedAnswer?: number;
    isCorrectAnswer?: boolean;
}