import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './pages/Home';

const App = () => {  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
