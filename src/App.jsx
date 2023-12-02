// Import components for use in App component
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './components/Resume'
import About from './components/About'
import Project from './components/Project'

// Import CSS and Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Render the website by pulling components into App component
function App() {
  return (
      <>
      <main className='fill-page'>
      <Header />
      < Routes>
        <Route path='/' element={< About/>}/>
        <Route path='/about' element={< About/>}/>
        <Route path='/projects' element={< Project/>}/>
        <Route path='/resume' element={< Resume/>}/>
      </Routes>
      < Footer/>
      </main>
      </>
  )
}

export default App
