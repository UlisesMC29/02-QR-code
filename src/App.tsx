import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Pageqr } from './pages/QrPage/pageqr'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/pageqr' element={<Pageqr />}>
          </Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
