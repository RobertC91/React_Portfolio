import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './components/Resume'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
<Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <About /> {/* Default route */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
