import { useAtom } from "jotai"
import { difficulityAtom } from "../atoms/difficulity.atom"

export const Difficulity = () => {
    const [value, setValue] = useAtom(difficulityAtom)
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(parseInt(e.target.value))
    }
    return (
        <>
            <form className="mx-auto w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">
                    Selecciona la dificultad
                </label>
                <select onChange={handleChange} defaultValue={value} id="difficulity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={10}>Fácil</option>
                    <option value={20}>Normal</option>
                    <option value={30}>Difícil</option>
                </select>
            </form>
        </>
    )
}
