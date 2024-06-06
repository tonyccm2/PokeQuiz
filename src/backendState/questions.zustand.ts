import { useQuery } from "@tanstack/react-query"
import { GetQuestions } from "../services/questions"

const key = 'questions'

export const useGetAllQuestions = (limit: number) => useQuery({
    queryKey: [key, limit],
    queryFn: () => GetQuestions(limit),
    enabled: false
})