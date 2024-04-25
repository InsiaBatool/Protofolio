import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Benner from './components/Benner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header />
   <Benner />
   <About />
   <Services />
   <Expertise />
   <Footer />
    
    </>
  )
}

export default App;
