import './App.css'
import HeroSection from './components/HeroSection'
import ProblemOpportunities from './components/ProblemOpportunities'
import UserPersona from './components/UserPersona'
import JobsToBeDone from './components/JobsToBeDone'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ProblemOpportunities />
      <UserPersona />
      <JobsToBeDone />
    </div>
  )
}

export default App
