
import { Footer } from "./components/Footer";
import { Header } from "./components/Header"
import { Restart } from "./components/Restart";
import { Score } from "./components/Score";
import { Start } from "./components/Start"
import { QuestionsList } from "./questions/QuestionsList";
import { useQuestionsStore } from "./store/Questions";

function App() {
  const length = useQuestionsStore((state) => state.length)
  return (
    <>
      <div className="px-5 pt-32 md:pt-4">
        <Header />
        <div className="max-w-md">
          {
            length === 0
              ? <Start />
              : <div className={`${length > 0 ? "visible transition-opacity ease-in-out delay-150 duration-1000 opacity-100" : "invisible opacity-0"}`}>
                <Score />
                <QuestionsList />
                <Restart />
              </div>
          }

        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
