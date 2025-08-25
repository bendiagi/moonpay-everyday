import './App.css'
import HeroSection from './components/HeroSection'
import ProblemOpportunities from './components/ProblemOpportunities'
import UserPersona from './components/UserPersona'
import JobsToBeDone from './components/JobsToBeDone'
import Features from './components/Features'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ProblemOpportunities />
      <UserPersona />
      <JobsToBeDone />
      <Features />
    </div>
  )
}

export default App
