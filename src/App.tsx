import './App.css'
import { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import ProblemOpportunities from './components/ProblemOpportunities'
import UserPersona from './components/UserPersona'
import JobsToBeDone from './components/JobsToBeDone'
import Features from './components/Features'
import EverydayJourney from './components/EverydayJourney'
import NFTRewards from './components/NFTRewards'
import Monetization from './components/Monetization'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isClicked, setIsClicked] = useState(false)
  const [isHoveringTitle, setIsHoveringTitle] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => {
      setIsClicked(true)
    }

    const handleMouseUp = () => {
      setIsClicked(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target && target.classList.contains('cursor-hover-target')) {
        setIsHoveringTitle(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element
      if (target && target.classList.contains('cursor-hover-target')) {
        setIsHoveringTitle(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <div className="App">
      <div 
        className={`custom-cursor ${isClicked ? 'clicked' : ''} ${isHoveringTitle ? 'hovering-title' : ''}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y
        }}
      />

      <HeroSection />
      <ProblemOpportunities />
      <UserPersona />
      <JobsToBeDone />
      <Features />
      <div style={{ padding: '4rem 10% 0 10%' }}>
        <div className="section-divider" style={{ margin: '0 0 2rem 0' }}></div>
      </div>
      <EverydayJourney />
      <NFTRewards />
      <Monetization />
    </div>
  )
}

export default App
