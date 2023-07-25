import './App.css'
import DisplaySection from './components/DisplaySection'
import Jumbotron from './components/Jumbotron'
import Nav from './components/Nav'
import NewSound from './components/NewSound'

function App() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <NewSound />
      <DisplaySection />
    </>
  )
}

export default App
