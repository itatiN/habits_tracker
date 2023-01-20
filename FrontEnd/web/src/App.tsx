import './styles/global.css'
import { Habit } from "./components/Habit"

function App() {

  return (
    <>
    <Habit completed={5}/>
    <Habit completed={10}/>
    <Habit completed={15}/>
    </>
  )
}

export default App
